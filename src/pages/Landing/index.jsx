import React, { Component } from 'react';
import { toJson } from 'unsplash-js';
import InfiniteScroll from 'react-infinite-scroller';
import Photo from '../../components/Photo';
import { unsplash } from '../../unsplash';
import styled from 'styled-components';
import UserLink from '../../components/UserLink';

const Container = styled.div`
  margin: 0 auto;
  text-align: center;
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
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 20px;
  width: 100%;
`;

const divStyle = {
  border: 'solid black 1px'
};
const PhotoContainer = styled.div`
  width: 150px;
  height: auto;
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
      <Container id='landing-container'>
        <Heading id='landing-heading'>Latest Photos:</Heading>
        <Results id='landing-results' style={divStyle}>
          <InfiniteScroll
            id='infinite-scroll'
            pageStart={1}
            loadMore={this.getData}
            hasMore={true || false}
            loader={<Loader key={0}>Loading ...</Loader>}>
            {this.state.photos.map(photo => {
              return (
                <PhotoContainer id='photo-container'>
                  <UserLink id='userlink' photo={photo} />
                  <Photo id='photo' key={photo.id} photo={photo} />
                </PhotoContainer>
              );
            })}
          </InfiniteScroll>
        </Results>
      </Container>
    );
  }
}
export default Landing;
