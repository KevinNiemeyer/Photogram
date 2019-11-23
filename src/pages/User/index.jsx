import React, { Component } from 'react';
import UserInfoComponent from '../../components/UserInfo';
import Photo from '../../components/Photo';

import { toJson } from 'unsplash-js';

import './UserStyles.css';

import { unsplash } from '../../unsplash';

class UserPage extends Component {
  state = {
    photos: []
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    this.getData();
  }

  getData() {
    unsplash.users
      .photos(this.props.match.params.userName, 1, 10, 'popular', false)
      .then(toJson)
      .then(json => {
        this.setState({
          photos: json
        });
      });
  }

  render() {
    if (!this.state.photos.length) return null;
    const { photos } = this.state;
    const { user } = photos[0];

    return (
      <div className='user-page-component'>
        <UserInfoComponent user={user} />
        {photos.map(photo => {
          return <Photo key={photo.id} photo={photo} />;
        })}
      </div>
    );
  }
}

export default UserPage;
