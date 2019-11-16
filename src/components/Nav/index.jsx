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
        <img src={heart} className='nav-icon' alt='heart' />
        <img src={person} className='nav-icon' alt='person' />
      </div>
    );
  }
}

export default Nav;
