import React from 'react';

import './Modal.css';

function Modal({show, close}){
    return(
        <div id="Modal" style={{
            display: show ? 'flex' : 'none'
        }}>
            <div id="box-modal">
                <div id="header">
                    <h2>Bem vindo</h2>
                    <span onClick={close} id="close-modal">x</span>
                </div>
                <div id="modal-container">
                    <p>Muito obrigado por se inscrever, entraremos em contato o mais rápido possivel</p>  
                </div>

            </div>
        </div>
    );
}

export default Modal;