import React from 'react';

import './Header.css';
import Menu from './Menu';
// import {Logo} from '../images/logo.jpg';
// import Logo from '../images/logo_size_invert.jpg';

function Header() {
  return(
      <header>
          <div id="logo">
            {/* <img src={Logo}></img> */}
          </div>
          <Menu />
      </header>
  );
}

export default Header;