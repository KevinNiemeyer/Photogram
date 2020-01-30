import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { LayoutContext } from '../../App';

const Container = styled.div`
  background-color: rgb(247, 154, 120);
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 75px;
  top: 58px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  z-index: 10;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
  &:active {
    transform: scale(0.9);
  }
  transition: 0.2s;
`;

const TopHat = styled.span`
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
  font-size: 36px;
  top: 5px;
  left: 7px;
  position: absolute;

  font-weight: bold;
`;

class GoToTop extends Component {
  state = {
    show: false
  };

  // trying to get the arrow to appear/disappear when it is at the top of the page
  componentDidMount() {
    const myButton = document.getElementById('goToTop');
    window.onscroll = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        myButton.style.display = 'flex';
      } else {
        myButton.style.display = 'none';
      }
    };
  }

  toTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  render() {
    return (
      <LayoutContext.Consumer>
        {value => {
          return (
            <Container id='goToTop' onClick={this.toTop} show={this.state.show}>
              <TopHat>&#94;</TopHat>
            </Container>
          );
        }}
      </LayoutContext.Consumer>
    );
  }
  f;
}

export default GoToTop;
