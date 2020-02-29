import React, { useState, useEffect, Component } from 'react';
import { LayoutContext } from '../../../App';
import { Link } from 'react-router-dom';
import { toJson } from 'unsplash-js';
import { unsplash } from '../../../unsplash';
import styled from 'styled-components';
import InfiniteScroll from 'react-infinite-scroller';
import GoToTop from '../../../components/GoToTop';
import SelectView from '../../../components/SelectView';

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
`;
const linkStyle = {
  textDecoration: 'none'
};

const SearchTerm = styled.span`
  color: rgb(247, 154, 120);
`;

const CollectionSearch = props => {
  const [collections, setCollections] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [collection, setCollection] = useState('');

  const getData = () => {
    unsplash.search
      .collections(props.match.params.collection, page, 5)
      .then(toJson)
      .then(json => {
        if (!json.results.length) {
          return { hasMore: false };
        }
        setCollections([...collections, ...json.results]);
        setPage(page + 1);

        //how do I convert the code below??

        /* this.setState(state => {
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
        }); */
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <LayoutContext.Consumer>
      {value => {
        return (
          <Container>
            <GoToTop />
            <Heading>
              Search results for
              <SearchTerm> {props.match.params.collection} </SearchTerm>in
              <SearchTerm> Collections</SearchTerm>:
              <SelectView value={value}></SelectView>
            </Heading>

            <InfiniteScroll
              pageStart={1}
              loadMore={getData}
              hasMore
              loader={<Loader key={0}>Loading ...</Loader>}>
              <Results id='collection-search-results'>
                {collections.map(collection => {
                  console.log(collection);
                  return (
                    <LinkContainer id='collection-search-link-container'>
                      <Link
                        category='collection'
                        id={collection.id}
                        to={`/collection/${collection.id}`}
                        style={linkStyle}
                        key={collection.id}>
                        <LinkTitle>{collection.title}</LinkTitle>
                        <Img
                          src={collection.cover_photo.urls.small}
                          alt='none'
                        />
                      </Link>
                    </LinkContainer>
                  );
                })}
              </Results>
            </InfiniteScroll>
          </Container>
        );
      }}
    </LayoutContext.Consumer>
  );
};

export default CollectionSearch;
