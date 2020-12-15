import React from 'react';

import '../styles/Home.css';

import Data from '../json/diferenciais.json';

import Header from '../components/Header';
import Diferenciais from '../components/Diferenciais';
import Footer from '../components/Footer';

function Home() {


  return(
    <div id="home">
      <Header /> 
      <div id="container">
        <div id="div-texto">
          <h1>O melhor da comida vegana você encontra aqui</h1>
          <p>Trabalhamos a 5 anos oferecendo o que há de melhor da comida</p>
        </div>
      </div>

      <div id="diferenciais">

        <div id="texto">
          <h1>Porque comprar conosco?</h1>
          <p>Nós da Veganood oferecemos os produtos da melhor qualidade, pensando no seu bem-estar</p>
        </div>

        <Diferenciais />
      </div>

      <Footer />

    </div>
  );
}

export default Home;