import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserLinkStyles.css';

class UserLink extends Component {
  render() {
    return (
      <div className='user-link-component'>
        <img
          className='user-link-pic'
          alt={this.props.photo.description}
          src={this.props.photo.user.profile_image.small}
        />

        <div className='user-link'>
          <Link
            className='user-link-name'
            to={`/user/${this.props.photo.user.username}`}
            style={{ textDecoration: 'none' }}>
            {this.props.photo.user.name}
          </Link>
        </div>
      </div>
    );
  }
}

export default UserLink;
