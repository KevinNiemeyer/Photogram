//need to create select view functionality and styling

import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { LayoutContext } from '../../App';

const ButtonContainer = styled.div`
  display: flex;
  font-size: 16px;
  align-items: center;
  margin: 20xpx;
  background-color: rgb(250, 250, 250);
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  margin: 5px;
  width: 75px;
  height: 25px;
  font-size: 16px;
  &:hover {
    opacity: 0.5;
  }
  &:focus {
    background-color: rgb(247, 154, 120);
  }
  cursor: pointer;
`;

const RadioGroup = styled.ul`
  list-style-type: none;
  margin: 25px 0 0 0;
  padding: 0;
  & li {
    float: left;
    margin: 0 5px 0 0;
    width: 100px;
    height: 40px;
    position: relative;
  }
  & label,
  & input {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    &[type='radio'] {
      opacity: 0.01;
      z-index: 100;
      &:checked + label {
        background: yellow;
      }
    }
    &label {
      padding: 5px;
      border: 1px solid #ccc;
      cursor: pointer;
      z-index: 90;
      &:hover {
        background: #ddd;
      }
    }
  }
`;

const Label = styled.label``;

const Input = styled.input``;

export class SelectView extends Component {
  render() {
    return (
      <LayoutContext.Consumer>
        {value => {
          console.log(value);
          return (
            <ButtonContainer id='select-view-container'>
              <h3>View:</h3>
              <RadioGroup class='selectButtons'>
                <li>
                  <input type='radio' id='a25' name='amount' />
                  <label for='a25'>Grid</label>
                </li>
                <li>
                  <input type='radio' id='a50' name='amount' />
                  <label for='a50'>List</label>
                </li>
                <li>
                  <input type='radio' id='a75' name='amount' />
                  <label for='a75'>Column</label>
                </li>
              </RadioGroup>
            </ButtonContainer>
          );
        }}
      </LayoutContext.Consumer>
    );
  }
}

export default SelectView;
