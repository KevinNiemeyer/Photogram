import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './UserLinkStyles.css';

export class UserLink extends Component {
  render() {
    return (
      <div className='user-link-component'>
        <img
          className='user-link-pic'
          src={this.props.photo.user.profile_image.small}></img>

        <div className='user-link'>
          <Link to={`/user/${this.props.photo.user.id}`}>
            {this.props.photo.user.name}
          </Link>
        </div>
      </div>
    );
  }
}

export default UserLink;
