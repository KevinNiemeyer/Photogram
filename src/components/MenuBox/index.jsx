import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import onClickOutside from 'react-onclickoutside';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 16px;
  width: 150px;
`;
// trying to get the list to drop down below the headerbar.
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 7px 20px 7px 20px;
  background-color: grey;
  width: 75px;
  z-index: 5;
  ${props =>
    props.listOpen
      ? css`
          border-radius: 3px 3px 0px 0px;
        `
      : css`
          border-radius: 3px 3px 3px 3px;
        `}
`;

const List = styled.ul`
  display: inline-block;
  border-radius: 0 0 3px 3px;

  ${props =>
    props.listOpen
      ? css`
          display: block;
        `
      : css`
          display: none;
        `}
`;

const ListItem = styled.li`
  background-color: lightgrey;
  text-align: center;
  padding: 10px 13px 10px 14px;
  &:hover {
    background-color: grey;
  }
  &:active {
    transform: scale(0.98);
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px 0 15px;
`;

const Icon = styled.p`
  transition: all 0.2s;
  color: rgb(247, 154, 120);
  ${props =>
    props.listOpen
      ? css`
          transform: rotate(-90deg);
        `
      : css`
          transform: rotate(90deg);
        `}
`;

class MenuBox extends Component {
  state = {
    category: '',
    listOpen: false,
    buttonText: 'Category'
  };

  handleClickOutside = () => {
    this.setState({ listOpen: false });
  };

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }));
  }

  handleChange = e => {
    this.setState({ category: e.value });
    console.log(this.state);
  };

  handleClick = e => {
    this.setState({ buttonText: e.target.innerHTML });
  };

  render() {
    const mystyle = {
      color: 'white',
      backgroundColor: 'DodgerBlue',
      padding: '10px',
      fontFamily: 'Arial'
    };
    const { listOpen, buttonText } = this.state;
    const options = ['Users', 'Collections', 'Photos'];
    const defaultOption = options[0];
    return (
      <Container>
        <Dropdown
          onChange={this.handleChange}
          options={options}
          placeholder='Category'
        />
      </Container>
      /*
      <Container id='dd-container'>
        <Wrapper id='dd-wrapper'>
          <Header
            id='dd-header'
            listOpen={listOpen}
            onClick={() => this.toggleList()}>
            {buttonText}
          </Header>

          <List id='dd-list' listOpen={listOpen}>
            <ListItem id='dd-list-item' key={1} onClick={this.handleClick}>
              Users
            </ListItem>
            <ListItem id='dd-list-item' key={2}>
              Collections
            </ListItem>
            <ListItem id='dd-list-item' key={3}>
              Photos
            </ListItem>
          </List>
        </Wrapper>
        <IconContainer id='icon-container' onClick={() => this.toggleList()}>
          <Icon listOpen={listOpen} id='icon'>
            &#10096;
          </Icon>
        </IconContainer>
      </Container>
      */
    );
  }
}

export default onClickOutside(MenuBox);
