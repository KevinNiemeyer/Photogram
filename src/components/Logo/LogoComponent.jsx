/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './LogoStyles.css';
import logo from './logo.png';

class Logo extends React.Component {
  render() {
    return (
      <div className='logo-component'>
        <img className='logo' src={logo} />
        <h2 className='logo-script'>Photogram</h2>
      </div>
    );
  }
}

export default Logo;
