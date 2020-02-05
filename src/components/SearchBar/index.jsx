import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MagnifyingGlassIcon from '../../assets/magnifying-glass.png';
import styled from 'styled-components';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Select from 'react-select';

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
    category: 'users'
  };

  handleSearchChange = e =>
    this.setState({ searchTerm: e.target.value.toLowerCase() });

  handleCategoryChange = e => {
    this.setState({ category: e.value.toLowerCase });
    console.log(e.value);
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
    const options = [
      { value: 'users', label: 'Users' },
      { value: 'collections', label: 'Collections' },
      { value: 'photos', label: 'Photos' }
    ];

    const customStyles = {
      menu: (provided, state) => ({
        ...provided,
        width: state.selectProps.width,
        display: state.selectProps.display,
        flexDirection: state.selectProps.flexDirection,
        justifyContent: state.selectProps.justifyContent,
        color: state.selectProps.menuColor,
        marginRight: state.selectProps.marginRight,
        padding: 5
      }),
      dropdownIndicator: (provided, state) => ({
        color: state.selectProps.menuColor
      }),
      control: (
        _,
        { selectProps: { width, display, flexDirection, marginRight } }
      ) => ({
        width: width,
        display: display,
        flexDirection: flexDirection,
        marginRight: marginRight
      }),

      singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
      }
    };
    return (
      <Container id='search-bar-container'>
        <Form id='form' onSubmit={this.handleSubmit}>
          <Select
            styles={customStyles}
            width='150px'
            menuColor='rgb(247, 154, 120)'
            display='flex'
            marginRight='20px'
            options={options}
            onChange={this.handleCategoryChange}
          />
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
