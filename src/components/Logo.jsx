import React from 'react';
import logo from './logo.png';
import './Logo.css';
class Logo extends React.Component {
  state = {};

  render() {
    return (
      <div className='logo-component'>
        <i className='fa fa-camera'></i>
        <h2 className='logo-script'>Photogram</h2>
      </div>
    );
  }
}

export default Logo;
