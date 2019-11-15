import React from 'react';
import './UserInfoStyles.css';
import gear from '../../assets/gear_icon.png';

export default function UserInfoComponent(props) {
  console.log(props);
  return (
    <div className='user-info-component'>
      <div className='user-info-component_image-div'>
        <img
          className='user-info-component_image'
          src={props.photo[0].user.profile_image.large}
          alt={props.photo[0].user.username}
        />
      </div>
      <div className='user-info-component_user-data'>
        <div className='user-info-component_user-data_row1'>
          <div className='user-info-component_username'>
            {props.photo[0].user.username}
          </div>

          <input type='button' id='edit-profile-button' value='Edit Profile' />
          <img src={gear} className='gear_icon' alt='gear' />
        </div>
        <div className='user-info-component_user-data_row2'>
          <p>{props.photo[0].user.total_collections} collections</p>
          <p>{props.photo[0].user.total_photos} photos</p>
          <p>{props.photo[0].user.total_likes} likes</p>
        </div>
        <div className='user-info-component_user-data_row3'>info</div>
      </div>
    </div>
  );
}
