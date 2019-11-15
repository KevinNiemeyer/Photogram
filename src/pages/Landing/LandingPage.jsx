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
      <div className='container'>
        <div className='landing-heading'>Latest Photos</div>
        <div className='landing-page-component'>
          {this.state.photos.map(photo => {
            return <LandingPhoto key={photo.id} photo={photo} />;
          })}
        </div>
      </div>
    );
  }
}
export default Landing;
