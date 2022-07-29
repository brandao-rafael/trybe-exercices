import React, { Component } from "react";

export default class InputName extends Component {
  render() {
    const { handleChanges, value } = this.props; 
    // let error = undefined;
    // if (value.length > 50) error = "Valor muito grande";
    // if (value.length === 0) error = "Insira um valor valido";
    return (
      <label>
        <input type="text" name='name' onChange={handleChanges} value={ value }/>
        {!value.length ? 'valor invalido' : 'ok'}
      </label>
    )
  }
}