import React, { Component } from 'react';
import UserInfoComponent from '../../components/UserInfo';
import { toJson } from 'unsplash-js';
import InfiniteScroll from 'react-infinite-scroller';
import './UserStyles.css';
import Photo from '../../components/Photo';
import styled from 'styled-components';
import { unsplash } from '../../unsplash';

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

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
      <UserContainer>
        <UserInfoComponent user={user} />
        <InfiniteScroll
          pageStart={1}
          loadMore={this.getData}
          hasMore={true || false}
          loader={
            <div className='loader' key={0}>
              Loading ...
            </div>
          }>
          {photos.map(photo => {
            return <Photo key={photo.id} photo={photo} />;
          })}
        </InfiniteScroll>
      </UserContainer>
    );
  }
}

export default UserPage;
