//getting an issue where the first search you do works, but if you type in a different search term,
//it still displays the first search

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';

export const CategoryContext = React.createContext();

const Container = styled.div`
  position: relative;
  display: inline-block;
  min-width: 75px;
  outline: none;
  border-radius: 0 0 3px 3px;
  &:hover div {
    display: block;
  }
`;

const DropButton = styled.button`
  background-color: rgb(250, 250, 250);
  color: rgb(0, 0, 0);
  padding: 7px 12px 7px 12px;
  font-size: 16px;
  width: 100px;
  border: solid lightgrey 1px;
  outline: none;
  border-top: red;
  border-bottom: red;
  border-left: red;
  border-radius: 3px 0 0 3px;
  &:hover {
    border-radius: 3px 0 0 0;
  }
`;
const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: rgb(250, 250, 250);
  min-width: 75px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 3px 3px;
  z-index: 1;
`;

const Button = styled.button`
  color: black;
  padding: 10px;
  font-size: 1rem;
  text-decoration: none;
  display: block;
  border: none;
  outline: none;
  width: 100%;
  &:hover {
    background-color: rgb(255, 0, 0, 0.8);
  }
  &:active {
    background-color: rgb(255, 0, 0, 0.3);
  }
  &:last-child {
    border-radius: 0 0 3px 3px;
  }
`;

const Dropdown = (props) => {
  const [category, setCategory] = useState('Category');

  const handleClick = (e) => {
    console.log(e.target.value);
    setCategory(e.target.value);
    props.handleCategoryChange(e.target.value);
  };

  return (
    <Container class='dropdown'>
      <DropButton id='dropbtn' class='dropbtn'>
        {category}
      </DropButton>
      <DropdownContent class='dropdown-content'>
        <Button id='btn1' onClick={handleClick} value='Users'>
          Users
        </Button>
        <Button id='btn2' onClick={handleClick} value='Collections'>
          Collections
        </Button>
        <Button id='btn3' onClick={handleClick} value='Photos'>
          Photos
        </Button>
      </DropdownContent>
    </Container>
  );
};
export default Dropdown;
