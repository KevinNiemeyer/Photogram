import React from 'react';
import Logo from '../Logo/Logo.jsx';
import SearchBar from '../SearchBar/SearchBar';
import Nav from '../Nav/Nav';
import './Header.css';

class Header extends React.Component {
  state = {};

  render() {
    return (
      <div className='header-component'>
        <Logo />
        <SearchBar />
        <Nav />
      </div>
    );
  }
}

export default Header;
