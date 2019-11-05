import React, { Component } from 'react';
import './SearchBar.css';

export class SearcBar extends Component {
  render() {
    return (
      <div className='search-bar-component'>
        <form>
          <input type='text' placeholder='Enter Search Term' />
          <input type='submit' value='Search' />
        </form>
      </div>
    );
  }
}

export default SearcBar;
