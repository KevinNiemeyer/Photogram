import React from 'react';
import Logo from '../Logo/LogoComponent.jsx';
import SearchBar from '../SearchBar/SearchBarComponent';
import Nav from '../Nav/NavComponent';
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
