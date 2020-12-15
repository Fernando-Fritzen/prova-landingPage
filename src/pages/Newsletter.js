import React, {useState} from 'react';

import '../styles/Newsletter.css';

import Header from '../components/Header';
import BoxRight from '../components/BoxRight';
import Footer from '../components/Footer';
import Modal from '../components/Modal';


function Newsletter() {

  const [show, setShow] = useState(false);

  const close = () => setShow(false);

  return(
    <div id="newletter">
        <Header />

        <div id="box-container">
            <div id="box">

                <div id="box-left"></div>
                <BoxRight setShow={setShow}/>

            </div>
        </div>
        <Footer />
        <Modal show={show} close={close}/>

    </div>
  );
}

export default Newsletter;