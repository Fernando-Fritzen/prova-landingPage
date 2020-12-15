import React from 'react';

import './Header.css';
import Menu from './Menu';
import Logo from '../images/logo.jpg';
import { Link } from 'react-router-dom';
// import Logo from '../images/logo_size_invert.jpg';

function Header() {
  return(
      <header>
          <div id="logo">
            <Link to="/"><img src={Logo} /></Link>
          </div>
          <Menu />
      </header>
  );
}

export default Header;