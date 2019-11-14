import React, { Component } from 'react';
import { toJson } from 'unsplash-js';
import './LandingStyles.css';
import LandingPhoto from '../../components/LandingPhoto/LandingPhotoComponent';
import { unsplash } from '../../unsplash';

export class Landing extends Component {
  state = {
    photos: []
  };

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll);
    this.getData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.getData();
    }
  }

  getData() {
    unsplash.photos
      .listPhotos(2, 15, 'latest')
      .then(toJson)
      .then(json => {
        this.setState({
          photos: json
        });
      });
  }

  render() {
    if (!this.state.photos.length) return null;
    return (
      <div className='landing-component'>
        {this.state.photos.map(photo => {
          return (
            <LandingPhoto
              key={photo.id}
              className='landing-component-photo'
              photo={photo}
            />
          );
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
