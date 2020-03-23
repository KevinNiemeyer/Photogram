//getting an issue where the first search you do works, but if you type in a different search term,
//it still displays the first search

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled, { css } from 'styled-components';
import './styles.css';

const Dropdown = () => {
  useEffect(() => {}, []);

  return (
    <div class='dropdown'>
      <button class='dropbtn'>Category</button>
      <div class='dropdown-content'>
        <a href='Users'>Link 1</a>
        <a href='Collections'>Link 2</a>
        <a href='Photos'>Link 3</a>
      </div>
    </div>
  );
};
export default Dropdown;
