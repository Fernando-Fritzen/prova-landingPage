import React from 'react';

// import { FaFacebook } from 'react-icons/fa';
import './Footer.css';
import Facebook from '../images/facebook-icon.png';
import Instagram from '../images/instagram-icon.png';
import Github from '../images/github-icon.png';

function Footer() {
  return(
      <footer>
          <div id="contato">
            <h3>Contato</h3>
            <p>Rua Rio de Janeiro, 01</p>
            <p>Ramilândia - PR</p>
            <p>fernandofritzen9@gmail.com</p>
            <p>(45) 998337940</p>

          </div>

          <div id="menu">
            <h3>Menu</h3>
            <p>Cardápio</p>
            <p>Contato</p>
            <p>Parceiros</p>
            <p>Sobre nós</p>
          </div>
            
          <div id="redesSociais">
            {/* <h3>{FaFacebook}</h3> */}
            <a href="https://www.facebook.com/fernandofritzen.pieske/"><img src={Facebook}></img></a>
            <a href="https://www.instagram.com/fernandofritzen9/?hl=pt-br"><img src={Instagram}></img></a>
            <a href="https://github.com/Fernando-Fritzen"><img src={Github}></img></a>
          </div>
      </footer>
  );
}

export default Footer;