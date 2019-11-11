import React, { Component } from 'react';
import './UserLink.css';

export class UserLink extends Component {
  render() {
    return (
      <div className='user-link-component'>
        <img
          className='user-link-pic'
          src={this.props.photo.user.profile_image.small}></img>
        <div className='user-link'>{this.props.photo.user.name}</div>
      </div>
    );
  }
}

export default UserLink;
