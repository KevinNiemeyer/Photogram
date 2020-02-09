import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { toJson } from 'unsplash-js';
import { unsplash } from '../../../unsplash';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import GoToTop from '../../../components/GoToTop';

const Loader = styled.div``;

const Container = styled.div`
  margin: 0 auto;
  background-color: rgb(250, 250, 250);
`;

const Heading = styled.div`
  margin: 0 auto;
  text-align: center;
  font-size: 40px;
  padding: 20px 0 0 20px;
`;

const Results = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;
  width: 100%;
`;

const LinkContainer = styled.div`
  width: 150px;
  height: auto;
  padding: 20px;
  &:hover {
    opacity: 0.8;
  }
`;
const LinkTitle = styled.div`
  padding: 10px;
  font-size: 20px;
  color: rgb(247, 154, 120);
  text-align: center;
`;
const Img = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;
const linkStyle = {
  textDecoration: 'none'
};

const SearchTerm = styled.span`
  color: rgb(247, 154, 120);
`;

export class CollectionSearch extends Component {
  state = {
    collections: [],
    page: 1,
    hasMore: true,
    collection: ''
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    unsplash.search
      .collections(this.props.match.params.collection, this.state.page, 5)
      .then(toJson)
      .then(json => {
        if (!json.results.length) {
          return this.setState({ hasMore: false });
        }

        this.setState(state => {
          const newState = {
            collections: [...state.collections, ...json.results],
            page: state.page + 1,
            collection: state.collection
          };
          if (!state.totalPages) {
            newState.totalPages = json.total_pages;
          }
          if (newState.page === state.totalPages) {
            newState.hasMore = false;
          }
          return newState;
        });
      });
  };

  render() {
    const { collections } = this.state;

    return (
      <Container>
        <GoToTop />
        <Heading>
          Search results for
          <SearchTerm> {this.props.match.params.collection} </SearchTerm>in
          Collections:
        </Heading>

        <InfiniteScroll
          pageStart={1}
          loadMore={this.getData}
          hasMore={this.state.hasMore}
          loader={<Loader key={0}>Loading ...</Loader>}>
          <Results id='collection-search-results'>
            {collections.map(collection => {
              return (
                <LinkContainer id='collection-search-link-container'>
                  <Link
                    category='collection'
                    id={collection.id}
                    to={`/collection/${collection.id}`}
                    style={linkStyle}
                    key={collection.id}>
                    <LinkTitle>{collection.title}</LinkTitle>
                    <Img src={collection.cover_photo.urls.small} alt='none' />
                  </Link>
                </LinkContainer>
              );
            })}
          </Results>
        </InfiniteScroll>
      </Container>
    );
  }
}

export default CollectionSearch;
