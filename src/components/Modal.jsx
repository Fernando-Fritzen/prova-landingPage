import React from 'react';

import './Modal.css';

function Modal({show, close}){
    return(
        <div id="Modal" style={{
            display: show ? 'flex' : 'none'
        }}>
            <div id="box-modal">
                <div id="header">
                    <h2>Muito obrigado</h2>
                    <span onClick={close}>x</span>
                </div>

                <p>Entraremos em contato o mais rápido possivel</p>
            </div>
        </div>
    );
}

export default Modal;