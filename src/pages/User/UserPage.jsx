import React, { Component } from 'react';
import UserPhotoComponent from '../../components/UserPhoto/UserPhotoComponent';
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
    console.log(this.props);
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
      <div className='landing-component'>
        {this.state.photos.map(photo => {
          return (
            <UserPhotoComponent
              key={photo.id}
              className='user-component-photo'
              photo={photo}
            />
          );
        })}
      </div>
    );
  }
}

export default UserPage;
