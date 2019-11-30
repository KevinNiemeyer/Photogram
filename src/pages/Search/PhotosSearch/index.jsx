import React, { Component } from 'react';
import { toJson } from 'unsplash-js';
import InfiniteScroll from 'react-infinite-scroller';
import Photo from '../../../components/Photo';
import { unsplash } from '../../../unsplash';
import styled from 'styled-components';

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
  width: 100%;
  position: relative;
  padding: 20px;
`;

const Loader = styled.div``;

export class PhotoSearch extends Component {
  state = {
    photos: [],
    page: 1
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    unsplash.search
      .photos(this.props.match.params.searchTerm, 1, 5, {
        orientation: 'portrait'
      })
      .then(toJson)
      .then(json => {
        this.setState({
          photos: [...this.state.photos, ...json.results],
          page: this.state.page + 1,
          hasMore: !!json.results.length
        });
      });
  };

  render() {
    if (!this.state.photos.length) return null;
    return (
      <Container>
        <Heading>
          Search results for "{this.props.match.params.searchTerm}"
        </Heading>
        <Results>
          <InfiniteScroll
            pageStart={1}
            loadMore={this.getData}
            hasMore={true || false}
            loader={<Loader key={0}>Loading ...</Loader>}>
            {this.state.photos.map(photo => {
              return <Photo key={photo.id} photo={photo} />;
            })}
          </InfiniteScroll>
        </Results>
      </Container>
    );
  }
}
export default PhotoSearch;
