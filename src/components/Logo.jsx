import React from 'react';
import './Logo.css';
import './logo.png';
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
