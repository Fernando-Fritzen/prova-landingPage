import React from 'react';

import './Menu.css';
import { Link } from 'react-router-dom';

function Menu() {
  return(
      <ul>
          <li>Cardápio</li>
          <li>Parceiros</li>
          <li>Sobre nós</li>
          <li><Link to="/newsletter">Contato</Link></li>
      </ul>
  );
}

export default Menu;