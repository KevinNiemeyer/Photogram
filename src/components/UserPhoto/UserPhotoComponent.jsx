import React, { Component } from 'react';
import './UserPhotoStyles.css';

class UserPhotoComponent extends Component {
  render() {
    return (
      <div className='photo-component'>
        <img
          className='photo-component-image'
          src={this.props.photo.urls.small}
          alt={this.props.photo.alt_description}
        />
      </div>
    );
  }
}

export default UserPhotoComponent;
