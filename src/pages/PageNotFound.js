import React from 'react';

import '../styles/NotFound.css';
import Header from '../components/Header';
import Footer from '../components/Footer';


function PageNotFound() {
  return (
    <div id="pageNotFound">
      <Header />
      <div id="footer-container">
        <h1 id="erro">Error 404</h1>
      </div>
      <Footer />
    </div>
  );
}

export default PageNotFound;