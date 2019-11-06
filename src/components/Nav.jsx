import React, { Component } from 'react';
import './Nav.css';
export class Nav extends Component {
  render() {
    return (
      <div className='nav-component'>
        <i class='fa fa-compass'></i>
        <i class='fa fa-heart'></i>
        <i class='fa fa-user'></i>
      </div>
    );
  }
}

export default Nav;
