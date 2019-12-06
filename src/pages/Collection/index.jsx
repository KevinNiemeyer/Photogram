import React, { Component } from 'react';
import { toJson } from 'unsplash-js';
import InfiniteScroll from 'react-infinite-scroller';
import Photo from '../../components/Photo';
import { unsplash } from '../../unsplash';
import styled from 'styled-components';
import UserLink from '../../components/UserLink';

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

const PhotoContainer = styled.div`
  width: 150px;
  height: auto;
  padding: 20px;
`;

const Results = styled.div``;

const Loader = styled.div``;

export class Collection extends Component {
  state = {
    photos: [],
    page: 1
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    unsplash.collections
      .getCollectionPhotos(
        this.props.match.params.id,
        this.state.page,
        10,
        'popular'
      )
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
    const { photos } = this.state;
    if (!photos.length) return null;
    return (
      <Container>
        <Heading>Collection: </Heading>
        <Results>
          <InfiniteScroll
            pageStart={1}
            loadMore={this.getData}
            hasMore={true || false}
            loader={<Loader key={0}>Loading ...</Loader>}>
            {photos.map(photo => {
              console.log(photo.user.username);
              return (
                <PhotoContainer>
                  <UserLink id='userlink' photo={photo} />
                  <Photo key={photo.id} photo={photo} />
                </PhotoContainer>
              );
            })}
          </InfiniteScroll>
        </Results>
      </Container>
    );
  }
}

export default Collection;
