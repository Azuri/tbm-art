import React from 'react';

import Menu from './Menu.jsx';
import Logo from './Logo.jsx';

class Header extends React.Component {
  render() {
    return (
      <header>
        <Logo />
        <Menu />
      </header>
    );
  }
}

export default Header;