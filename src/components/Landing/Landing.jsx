import React, { Component } from 'react';
import './Landing.css';

export class Landing extends Component {
  render() {
    console.log(this.props.photos[0].color);
    return <div className='landing-component'></div>;
  }
}

export default Landing;
