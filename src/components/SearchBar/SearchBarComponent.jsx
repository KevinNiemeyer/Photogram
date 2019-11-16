import React, { Component } from 'react';
import './SearchBarStyles.css';

export class SearcBar extends Component {
  render() {
    return (
      <div className='search-bar-component'>
        <form>
          <div class='dropdown'>
            <button class='dropbtn'>Search Category</button>
            <div class='dropdown-content'>
              <a href='#'>Users</a>
              <a href='#'>Collections</a>
              <a href='#'>Photos</a>
            </div>
          </div>

          <input type='text' className='search-bar-input'></input>
        </form>
      </div>
    );
  }
}

export default SearcBar;
