import React, { Component } from 'react';
import './Nav.css';
export class Nav extends Component {
  render() {
    return (
      <div className='nav-component'>
        <i className='fa fa-compass'></i>
        <i className='fa fa-heart'></i>
        <i className='fa fa-user'></i>
      </div>
    );
  }
}

export default Nav;
