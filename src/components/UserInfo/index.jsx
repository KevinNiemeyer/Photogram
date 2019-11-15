import React from 'react';
import './UserInfoStyles.css';
import gear from '../../assets/gear_icon.png';

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
          <div className='user-info-component_username'>
            {user.username}
          </div>


        </div>
        <div className='user-info-row'>
          <p>{user.total_collections} collections</p>
          <p>{user.total_photos} photos</p>
          <p>{user.total_likes} likes</p>
        </div>
        <div className='user-info-row'>info</div>
      </div>
    </div>
  );
}
