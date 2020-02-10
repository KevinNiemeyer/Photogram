import React from 'react';
import Logo from '../Logo/index.jsx';
import SearchBar from '../SearchBar';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 75px;
  border-bottom: solid 1px lightgrey;
  background-color: white;
  z-index: 2;
`;

const Button = styled.button`
  color: rgb(247, 154, 120);
  font-size: 16px;
  width: auto;
  margin-right: 18%;
  padding: 5px 20px 5px 20px;
  border: solid lightgrey 1px;
  outline: none;
  &:hover {
    opacity: (0.8);
  }
  &:active {
    transform: scale(0.95);
  }
`;

class Header extends React.Component {
  handleClick = e => {
    e.preventDefault();
    this.props.history.push(`/favorites`);
  };
  state = {};

  render() {
    return (
      <Container>
        <Logo />
        <SearchBar />
        <Button onClick={this.handleClick}>Favorites</Button>
      </Container>
    );
  }
}

export default withRouter(Header);
