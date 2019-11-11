import React, { Component } from 'react';
import './Landing.css';
import Photo from '../Photo/Photo';

export class Landing extends Component {
  //api calls here
  render() {
    if (!this.props.photos.length) return null;
    return (
      <div className='landing-component'>
        {this.props.photos.map(photo => {
          console.log(photo);
          return <Photo className='landing-component-photo' photo={photo} />;
        })}
      </div>
    );
  }
}
export default Landing;

/*  <div>
 <img src={photo.user.profile_image.small} />
 <div>{photo.user.username}</div> */

/*  render() {
  if (!this.props.photos.length) return null;
  return (
    <div className='top-pics'>
      {this.props.photos.map(photo => {
        console.log(photo);
        return (
          <img
            className='landing-component-image'
            src={photo.urls.small}
            alt={photo.alt_description}
          />
        );
      })}
      <div className='user-link'></div>
    </div>
  );
} */
