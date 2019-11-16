import React from 'react';
import './UserInfoStyles.css';

export default function UserInfoComponent({ user }) {
  return (
    <div className='user-info-component'>
      <img
        className='user-info-component_image'
        src={user.profile_image.large}
        alt={user.username}
      />

      <div className='user-info-component_user-data'>
        <div className='user-info-row'>
          <div className='user-info-component_username'>{user.username}</div>
        </div>
        <div className='user-info-row'>
          <div>{user.total_collections} collections</div>
          <div>{user.total_photos} photos</div>
          <div>{user.total_likes} likes</div>
        </div>
        <div className='user-info-row users-name'>{user.name}</div>
      </div>
    </div>
  );
}
