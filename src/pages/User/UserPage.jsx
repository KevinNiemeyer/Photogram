import React, { Component } from 'react';
import UserPhotoComponent from '../../components/UserPhoto/UserPhotoComponent';
import UserInfoComponent from '../../components/UserInfo/UserInfoComponent';

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
    return (
      <div className='user-page-component'>
        <UserInfoComponent photo={this.state.photos} />
        {this.state.photos.map(photo => {
          return (
            <UserPhotoComponent
              key={photo.id}
              className='user-photo-component'
              photo={photo}
            />
          );
        })}
      </div>
    );
  }
}

export default UserPage;
