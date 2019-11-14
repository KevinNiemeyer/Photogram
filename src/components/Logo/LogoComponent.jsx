/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import './LogoStyles.css';

import logo from './logo.png';

class Logo extends React.Component {
  render() {
    return (
      <div className='logo-component'>
        <Link className='landing-link' to='/'>
          <img className='logo' src={logo} />
        </Link>
        <Link className='landing-link' to='/'>
          <h2 className='logo-script'>Photogram</h2>
        </Link>
      </div>
    );
  }
}

export default Logo;
