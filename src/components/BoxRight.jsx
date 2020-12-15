import React from 'react';

import './BoxRight.css';
import { useState } from 'react';

function BoxRight({setShow}) {

  const [dados, setDados] = useState("");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [nascimento, setNascimento] = useState("");


  function handleSubmit(event){
    const novoDado = {
      nome: nome,
      email: email,
      telefone: telefone,
      nascimento: nascimento
    }

    setDados(novoDado);
    console.log(dados);
    event.preventDefault();
  }

  const handleChangeNome = (e) => {
    setNome(e.target.value);
    console.log(e.target.value);
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  }

  const handleChangeTelefone = (e) => {
    setTelefone(e.target.value);
    console.log(e.target.value);
  }

  const handleChangeNascimento = (e) => {
    setNascimento(e.target.value);
    console.log(e.target.value);
  }


  return(
    <div id="box-right">
        <form onSubmit={handleSubmit}> 

            <h3>Escreva-nos uma mensagem</h3>
            <h4>Insira seus dados e nossa equipe entrará em contato</h4>
            <div id="form">
              <div id="form-newsletter">
                <span>Nome</span>
                <input onChange={handleChangeNome} value={nome} type="text" placeholder="Nome"></input>
              </div>

              <div id="form-newsletter">
                <span>E-mail</span>
                <input onChange={handleChangeEmail} value={email} type="email" placeholder="E-mail"></input>
              </div>

              <div id="form-newsletter">
                <span>Telefone</span>
                <input onChange={handleChangeTelefone} value={telefone} type="text" placeholder="Numero"></input>
              </div>

              <div id="form-newsletter">
                <span>Data de nascimento</span>
                <input onChange={handleChangeNascimento} value={nascimento} type="date" value="2017-06-01" placeholder="Data de nascimento"></input>
              </div>
            </div>

            <div id="checkbox">
                <input type="checkbox"></input>
                <span>Receber Newsletter</span>
            </div>

            <input id="cadastrar" type="submit" value="Cadastrar"  onClick={() => setShow(true)}/>

        </form>         
    </div>
  );
}

export default BoxRight;