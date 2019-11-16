import React, { Component } from 'react';
import UserLink from '../UserLink/index.jsx';
import './LandingPhotoStyles.css';

class LandingPhotoComponent extends Component {
  render() {
    return (
      <div className='photo-component'>
        <img
          className='photo-component-image'
          src={this.props.photo.urls.small}
          alt={this.props.photo.alt_description}
        />

        <UserLink id='photo-user-link' photo={this.props.photo} />
      </div>
    );
  }
}

export default LandingPhotoComponent;
