import React, { Component } from 'react';
import MagnifyingGlassIcon from '../../assets/magnifying-glass.png';
import './SearchBarStyles.css';

export class SearchBar extends Component {
  state = {
    searchTerm: ''
  };
  handleChange = e => this.setState({ searchTerm: e.target.value });

  render() {
    return (
      <div className='search-bar-component'>
        <form>
          <div className='dropdown'>
            <button className='dropbtn'>Search Category</button>
            <div className='dropdown-content'>
              <a href='#'>Users</a>
              <a href='#'>Collections</a>
              <a href='#'>Photos</a>
            </div>
          </div>

          <input
            onChange={this.handleChange}
            type='text'
            className='search-bar-input'
            placeholder='Search'
          />
          <div className='magnifying-glass-div'>
            <img
              src={MagnifyingGlassIcon}
              className='magnifying-glass-icon'
              alt='magnifying-glass'
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
