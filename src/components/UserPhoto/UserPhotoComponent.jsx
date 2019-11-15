import React, { Component } from 'react';
import './UserPhotoStyles.css';

class UserPhotoComponent extends Component {
  render() {
    return (
      <div className='user-photo-component'>
        <img
          className='user-photo-component-image'
          src={this.props.photo.urls.small}
          alt={this.props.photo.alt_description}
        />
      </div>
    );
  }
}

export default UserPhotoComponent;
