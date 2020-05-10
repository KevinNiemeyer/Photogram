import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import MagnifyingGlassIcon from '../../assets/magnifying-glass.png';
import styled from 'styled-components';
import Dropdown from '../Dropdown';
import { CategoryContext } from '../Dropdown';

const Form = styled.form`
  display: flex;
  justify-content: center;
  width: 33%;
`;

const Input = styled.input`
  border: none;
  outline: none;
  min-height: 25px;
  padding-left: 10px;
  background-color: rgb(250, 250, 250);
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0 10px 0 10px;
  background-color: rgb(250, 250, 250);
  border-radius: 0 3px 3px 0;
  outline: none;
  border: none;
  &:hover {
    opacity: 0.9;
  }
  &:active img {
    transform: scale(0.9);
  }
`;

const Img = styled.img`
  width: 15px;
  height: 15px;
`;

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('Category');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };
  const handleCategoryChange = (value) => {
    if (value) {
      setCategory(value.toLowerCase());
    }
  };

  const handleSubmit = () => {
    if (searchTerm && category) {
      props.history.push(`/search/${category}/${searchTerm}`);
      console.log(this.props.history);
    }
    document.getElementById('search-input').value = '';
  };
  //can't get it to select the same category with a different search term

  return (
    <Form onSubmit={handleSubmit}>
      <Dropdown id='dropdown' handleCategoryChange={handleCategoryChange} />

      {/* <select id='select-box' required onChange={this.handleCategoryChange}>
          <option value='' default selected disabled hidden>
            Category
          </option>
          <option value='User'>Users</option>
          <option value='Collections'>Collections</option>
          <option value='Photos'>Photos</option>
        </select>
    */}
      <Input
        id='search-input'
        required
        onChange={handleSearchChange}
        type='text'
        placeholder='Search'
      />

      <Button type='submit'>
        <Img src={MagnifyingGlassIcon} alt='magnifying-glass' />
      </Button>
    </Form>
  );
};

export default withRouter(SearchBar);
