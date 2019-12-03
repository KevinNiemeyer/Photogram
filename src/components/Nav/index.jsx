import React, { Component } from 'react';
import compass from '../../assets/compass.png';
import heart from '../../assets/heart.png';
import person from '../../assets/person.png';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  flex: 1;
  z-index: 10;
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
  padding: 20px;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1);
  }
`;
export class Nav extends Component {
  render() {
    return (
      <Container>
        <Img src={compass} alt='compass' />
        <Img src={heart} alt='heart' />
        <Img src={person} alt='person' />
      </Container>
    );
  }
}

export default Nav;
