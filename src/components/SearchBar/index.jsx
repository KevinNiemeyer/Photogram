import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import MagnifyingGlassIcon from '../../assets/magnifying-glass.png';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  
`;

const Input = styled.input`
  border: none;
  outline: none;
  min-height: 30px;
  padding-left: 10px;
  border-radius: 3px 0 0 3px;
  background-color: rgb(250, 250, 250);
`;

const Button = styled.button`
  display: flex;
  min-height: 32px;
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

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
`;

const Img = styled.img`
  max-width: 15px;
`;

const radios = {
  display:'flex',
  paddingBottom: '15px', 
  fontSize: '18px',
}

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };
  const handleCategoryChange = (e) => {
    if (e) {
      setCategory(e.target.value.toLowerCase());
      console.log(e.target.checked=true);
    }
  };
  const handleSubmit = () => {
    console.log("test")
    if (searchTerm && category) {
      props.history.push(`/search/${category}/${searchTerm}`);
    }
    document.getElementById('search-input').value = '';
  };
  //can't get it to select the same category with a different search term

  return (
    <Form onSubmit={handleSubmit} id="form1">
      <Wrapper style={radios}>
        <h3>Search for:&nbsp;&nbsp;</h3>
        <input onChange={handleCategoryChange} type="radio" id="users" name="category" value="users" required />
        <label htmlFor="users">Users</label>
        <input onChange={handleCategoryChange} type="radio" id="collections" name="category" value="collections" />
        <label htmlFor="collections" >Collections</label>
        <input onChange={handleCategoryChange} type="radio" id="photos" name="category" value="photos" />
        <label htmlFor="photos" >Photos</label>
      </Wrapper>
   {/*<Dropdown id='dropdown' handleCategoryChange={handleCategoryChange} /> */}

      {/* <select id='select-box' required onChange={this.handleCategoryChange}>
          <option value='' default selected disabled hidden>
            Category
          </option>
          <option value='User'>Users</option>
          <option value='Collections'>Collections</option>
          <option value='Photos'>Photos</option>
        </select>
    */}
      <Wrapper>
        <Input
          id='search-input'
          required
          onChange={handleSearchChange}
          type='text'
          placeholder='Search'
        />

        <Button type="submit" form="form1">
          <Img src={MagnifyingGlassIcon} alt='magnifying-glass' />
        </Button>
      </Wrapper>
    </Form>
  );
};

export default withRouter(SearchBar);
