import React, { Component } from 'react';
import './Landing.css';

export class Landing extends Component {
  render() {
    console.log(this.props.photos[1]);
    // console.log(this.props.photos[1].links);
    return <div className='landing-component'></div>;
  }
}

export default Landing;
