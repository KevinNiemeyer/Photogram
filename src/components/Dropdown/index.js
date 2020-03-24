//getting an issue where the first search you do works, but if you type in a different search term,
//it still displays the first search

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import './styles.css';

export const CategoryContext = React.createContext();

const Dropdown = () => {
  const [category, setCategory] = useState('');
  const handleClick = e => {
    if (e) {
      e.preventDefault();
      setCategory(e.target.value);
      console.log(category);
    }
  };

  return (
    <CategoryContext.Provider
      value={{
        category: category
      }}>
      <div class='dropdown'>
        <button class='dropbtn'>Category</button>
        <div class='dropdown-content'>
          <button id='btn1' onClick={handleClick} value='users'>
            Users
          </button>
          <button id='btn2' onClick={handleClick} value='collections'>
            Collections
          </button>
          <button id='btn3' onClick={handleClick} value='photos'>
            Photos
          </button>
        </div>
      </div>
    </CategoryContext.Provider>
  );
};
export default Dropdown;
