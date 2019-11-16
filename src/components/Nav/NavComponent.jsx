import React, { Component } from 'react';
import compass from '../../assets/compass.png';
import heart from '../../assets/heart.png';
import person from '../../assets/person.png';

import './NavStyles.css';

export class Nav extends Component {
  render() {
    return (
      <div className='nav-component'>
        <img src={compass} className='nav-icon' alt='compass' />
        <img src={heart} classname='nav-icon' alt='heart' />
        <img src={person} classname='nav-icon' alt='person' />
      </div>
    );
  }
}

export default Nav;
