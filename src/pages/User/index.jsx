import React, { Component } from 'react';
import UserInfoComponent from '../../components/UserInfo';
import { toJson } from 'unsplash-js';
import InfiniteScroll from 'react-infinite-scroller';
import styled from 'styled-components';
import Photo from '../../components/Photo';
import { unsplash } from '../../unsplash';

const Container = styled.div`
  margin: 0 auto;
`;

const Results = styled.div`
  border: 'solid black 1px';
`;

const PhotoContainer = styled.div`
  width: 150px;
  height: auto;
  padding: 20px;
`;

const Loader = styled.div``;

class UserPage extends Component {
  state = {
    photos: [],
    page: 1
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    unsplash.users
      .photos(
        this.props.match.params.userName,
        this.state.page,
        5,
        'popular',
        false
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
    if (!this.state.photos.length) return null;
    const { photos } = this.state;
    const { user } = photos[0];

    return (
      <Container>
        <UserInfoComponent user={user} />
        <Results>
          <InfiniteScroll
            pageStart={1}
            loadMore={this.getData}
            hasMore={true || false}
            loader={<Loader key={0}>Loading ...</Loader>}>
            {photos.map(photo => {
              return (
                <PhotoContainer id='photo-container'>
                  <Photo category='user' key={photo.id} photo={photo} />
                </PhotoContainer>
              );
            })}
          </InfiniteScroll>
        </Results>
      </Container>
    );
  }
}

export default UserPage;
