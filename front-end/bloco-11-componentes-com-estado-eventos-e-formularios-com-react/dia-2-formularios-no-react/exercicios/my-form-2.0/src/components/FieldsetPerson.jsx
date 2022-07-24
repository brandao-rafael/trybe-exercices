import React, { Component } from "react";

export default class FieldsetPerson extends Component {
  render() {
    const estados = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO'];
    const { handleChange, onBlurHandler} = this.props;
    return (
      <fieldset>
          <label>
            Name:
            <input type="text" name="name" maxLength="40" placeholder="Name" required onChange={ handleChange }/>
          </label>
          <label>
            Email:
            <input type="text" name="email" maxLength="50" placeholder="E-mail" required onChange={ handleChange }/>
          </label>
          <label>
            <input type="text" name="cpf" maxLength="11" placeholder="CPF" required onChange={ handleChange }/>
          </label>
          <label>
            <input type="text" name="adress" maxLength="200" placeholder="Endereço" required onChange={ handleChange }/>
          </label>
          <label>
            <input type="text" name="city" maxLength="28" placeholder="Cidade" required onBlur={ onBlurHandler } onChange={ handleChange }/>
          </label>
          <label>
            <select name="state" onChange={ handleChange } required>
              {estados.map((state) => {
                return (
                  <option value={ state } key={ state }>{ state }</option>
                )
              })}
            </select>
          </label>
          <div onChange={ handleChange }>
            <label>
              <input type="radio" name="residence" id="casa" value="Casa" />Casa
            </label>
            <label>
              <input type="radio" name="residence" id="apartamento" value="Apartamento" />Apartamento
            </label>
          </div>
        </fieldset>
    )
  }
}