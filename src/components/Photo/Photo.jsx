import React, { Component } from 'react';
import './Photo.css';
export default class Photo extends Component {
  render() {
    console.log(this.props);
    return (
      <div className='photo-component'>
        <img
          className='photo-component-image'
          src={this.props.photo.urls.small}
          alt={this.props.photo.alt_description}
        />
      </div>
    );
  }
}
