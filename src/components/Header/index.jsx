import React from 'react';
import Logo from '../Logo/index.jsx';
import SearchBar from '../SearchBar';
import Nav from '../Nav';
import './HeaderStyles.css';

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
