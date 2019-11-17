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
    console.log(e.target.value);
    this.setState({ category: e.target.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchTerm) {
      this.props.history.push(
        `/${this.state.category}/${this.state.searchTerm}`
      );
    }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='search-bar-component'>
        <select
          value=''
          onChange={this.handleCategoryChange}
          id='search-category-select'>
          <option value='' disabled hidden>
            Category
          </option>
          <option value='Users'>Users</option>
          <option value='Collections'>Collections</option>
          <option value='Photos'>Photos</option>
        </select>
        <input
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

/* <div className='dropdown'>
<div className='dropbtn'>Search Category</div>
<div className='dropdown-content'>
  <a onClick={this.handleCategoryChange}>Users</a>
  <a onClick={this.handleCategoryChange}>Collections</a>
  <a onClick={this.handleCategoryChange}>Photos</a>
</div>
</div> */
