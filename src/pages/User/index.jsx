import React, { Component } from 'react';
import UserInfoComponent from '../../components/UserInfo';
import { toJson } from 'unsplash-js';
import InfiniteScroll from 'react-infinite-scroller';
import './UserStyles.css';
import Photo from '../../components/Photo';
import { unsplash } from '../../unsplash';

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
      <div className='user-page-component'>
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
      </div>
    );
  }
}

export default UserPage;
