import React, { Component } from 'react';

export default class FormDataDisplay extends Component {
  render() {
    const { 
      currentState: { 
        name, adress, city, cpf, description, email, office, residence, resumeSumary, state 
      }
    } = this.props;
    return (
      <div>
      <h2>Dados pessoais:</h2>
      <ul>
        <li>Nome: { name }</li>
        <li>Email: { email }</li>
        <li>CPF: { cpf }</li>
        <li>Endereço: { adress }</li>
        <li>Cidade: { city }</li>
        <li>Estado: { state }</li>
        <li>Tipo de residencia: { residence }</li>
      </ul>
      <h2>Dados Profissionais</h2>
      <ul>
        <li>Curriculum: { resumeSumary }</li>
        <li>Cargo: { office }</li>
        <li>Descrição: { description }</li>
      </ul>
      </div>
    );
  }
}