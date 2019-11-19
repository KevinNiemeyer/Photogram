import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MagnifyingGlassIcon from '../../assets/magnifying-glass.png';
import './SearchBarStyles.css';

export class SearchBar extends Component {
  state = {
    searchTerm: '',
    category: ''
  };

  handleSearchChange = e =>
    this.setState({ searchTerm: e.target.value.toLowerCase() });

  handleCategoryChange = e => {
    this.setState({ category: e.target.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchTerm) {
      this.props.history.push(
        `/search/${this.state.category}/${this.state.searchTerm}`
      );
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='search-bar-component'>
        <select
          required
          onChange={this.handleCategoryChange}
          id='search-category-select'>
          <option value='' selected disabled hidden>
            Category
          </option>
          <option value='User'>Users</option>
          <option value='Collections'>Collections</option>
          <option value='Photos'>Photos</option>
        </select>
        <input
          required
          onChange={this.handleSearchChange}
          type='text'
          className='search-bar-input'
          placeholder='Search'
        />
        <button className='magnifying-glass-div'>
          <img
            src={MagnifyingGlassIcon}
            className='magnifying-glass-icon'
            alt='magnifying-glass'
          />
        </button>
      </form>
    );
  }
}

export default withRouter(SearchBar);
