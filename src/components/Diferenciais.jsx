import React from 'react';

import './Diferenciais.css';

import Data from '../json/diferenciais.json';
function Diferenciais() {
  return(
    <table>
      {Data.map( post => {
          return(
              <td>
                <tr className="titulo"><h3>{post.titulo}</h3></tr>
                <tr>{post.descricao}</tr>
              </td>
          )
        })}
    </table>
    
  );
}

export default Diferenciais;