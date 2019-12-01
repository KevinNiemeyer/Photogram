import React, { Component } from 'react';
import { toJson } from 'unsplash-js';
import InfiniteScroll from 'react-infinite-scroller';
import Photo from '../../components/Photo';
import { unsplash } from '../../unsplash';
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
  position: relative;
  padding: 20px;
`;

const Loader = styled.div``;

export class Landing extends Component {
  state = {
    photos: [],
    page: 1
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    unsplash.photos
      .listPhotos(this.state.page, 5, 'latest')
      .then(toJson)
      .then(json => {
        this.setState({
          photos: [...this.state.photos, ...json],
          page: this.state.page + 1,
          hasMore: !!json.length
        });
      });
  };

  render() {
    if (!this.state.photos.length) return null;
    return (
      <Container>
        <Heading>Latest Photos:</Heading>
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
export default Landing;
