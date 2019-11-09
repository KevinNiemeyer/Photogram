import React from 'react';
import styled from 'styled-components'
import Logo from '../Logo';
import SearchBar from '../SearchBar';
import Nav from '../Nav';
import './Header.css';

const Container = styled.div`
 display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75px;
  flex: 1;
  border-bottom: solid 1px lightgrey;
`

class Header extends React.Component {
  render() {
    return (
      <Container >
        <Logo />
        <SearchBar />
        <Nav />
      </Container>
    );
  }
}

export default Header;
