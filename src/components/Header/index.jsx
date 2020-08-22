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
  border-bottom: solid 1px var(--main-color);
  background-color: darkcyan;
  z-index: 4;
`;
const ButtonContainer = styled.div`
  width: 33%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  color: black;  
  
  font-size: 16px;
  width: auto;
  padding: 5px 20px 5px 20px;
  margin-left: 100px;
  border: none;
  outline: none;
  border-radius: 3px;
  &:hover {
    opacity: 0.9;
  }
  &:active {
    transform:scale(0.999)
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
