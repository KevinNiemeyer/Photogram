import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MagnifyingGlassIcon from '../../assets/magnifying-glass.png';
import styled from 'styled-components';
import MenuBox from '../MenuBox';

const Container = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

const Form = styled.form`
  display: flex;

  width: 100%;
`;

const Input = styled.input`
  border: none;
  outline: none;
  min-height: 25px;
  padding-left: 10px;
  background-color: rgb(250, 250, 250);
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 0 10px 0 10px;
  background-color: rgb(247, 154, 120);
  border-radius: 0 3px 3px 0;
  outline: none;
  border: none;
  &:hover {
    opacity: 0.9;
  }
  &:active img {
    transform: scale(0.7);
  }
`;

const Img = styled.img`
  width: 15px;
  height: 15px;
`;

export class SearchBar extends Component {
  state = {
    searchTerm: '',
    category: ''
  };

  handleSearchChange = e =>
    this.setState({ searchTerm: e.target.value.toLowerCase() });

  handleCategoryChange = e => {
    this.setState({ category: e.target.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchTerm) {
      this.props.history.push(
        `/search/${this.state.category}/${this.state.searchTerm}`
      );
    }
  };

  render() {
    return (
      <Container id='search-bar-container'>
        <MenuBox id='menubox'></MenuBox>
        <Form id='form' onSubmit={this.handleSubmit}>
          <Input
            id='search-input'
            required
            onChange={this.handleSearchChange}
            type='text'
            placeholder='Search'
          />
          <Button id='search-button'>
            <Img
              id='search-button-img'
              src={MagnifyingGlassIcon}
              alt='magnifying-glass'
            />
          </Button>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SearchBar);
