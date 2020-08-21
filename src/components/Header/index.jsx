import React from 'react';
import Logo from '../Logo/index.jsx';
import SearchBar from '../SearchBar';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Nav = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90px;
  border-bottom: solid 1px lightgrey;
  background-color: red;
  z-index: 4;
`;
const ButtonContainer = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  color: rgb(255, 0, 0);
  font-size: 16px;
  width: auto;
  padding: 5px 20px 5px 20px;
  margin-left: 100px;
  border: solid lightgrey 1px;
  outline: none;
  border-radius: 3px;
  &:hover {
    opacity: (0.8);
  }
  &:active {
    transform: scale(0.95);
  }
`;

class Header extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.history.push(`/favorites`);
  };
  state = {};

  render() {
    return (
      <Nav>
        <Logo />
        <SearchBar />
        <ButtonContainer>
          <Button onClick={this.handleClick}>Favorites</Button>
        </ButtonContainer>
      </Nav>
    );
  }
}

export default withRouter(Header);
