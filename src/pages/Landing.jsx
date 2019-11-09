import React, { Component } from 'react';
import './Landing.css';

export class Landing extends Component {
  //api calls here
  render() {
    if (!this.props.photos.length) return null;
    return (<div>
      {this.props.photos.map(photo => {
        console.log(photo)
        return (<div>
          <img src={photo.urls.small} />
          <div>
            <img src={photo.user.profile_image.small} />
            <div>{photo.user.username}</div>
          </div>
        </div>)
      })}
    </div>);
  }
}

export default Landing;