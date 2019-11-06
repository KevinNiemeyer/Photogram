import React, { Component } from 'react';
import './SearchBar.css';

export class SearcBar extends Component {
  render() {
    return (
      <div className='search-bar-component'>
        <div className='search-bar-placeholder' tabindex='2'>
          <div className='magnifying-glass'></div>
          <p>Search</p>
          <input type='text' className='search-bar-input'></input>
          <div className='search-bar-cancel' tabIndex='2'>
            X
          </div>
        </div>
      </div>
    );
  }
}

export default SearcBar;
