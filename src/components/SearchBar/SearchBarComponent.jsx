import React, { Component } from 'react';
import './SearchBarStyles.css';

export class SearcBar extends Component {
  render() {
    return (
      <div className='search-bar-component'>
        <div className='search-bar-placeholder' tabIndex='2'>
          <div className='magnifying-glass'></div>
          <p>Search</p>
          <input type='text' className='search-bar-input'></input>
        </div>
      </div>
    );
  }
}

export default SearcBar;
