import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { LayoutContext } from '../../App';

const Container = styled.div`
  background: var(--secondary-color);
  ${props =>
    props.showButton
      ? css`
          display: flex;
        `
      : css`
          display: none;
        `}
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 55px;
  top: 100px;
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
  z-index: 2;
  font-weight: bold;
`;

class GoToTop extends Component {
  state = {
    showButton: false
  };

  // trying to get the arrow to appear/disappear when it is at the top of the page
  componentDidMount() {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        this.setState({ showButton: true });
      } else {
        this.setState({ showButton: false });
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
            <Container
              id='goToTop'
              onClick={this.toTop}
              showButton={this.state.showButton}>
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
