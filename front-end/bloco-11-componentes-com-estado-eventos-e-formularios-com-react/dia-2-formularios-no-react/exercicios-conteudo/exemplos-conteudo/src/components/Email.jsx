import React, { Component } from 'react'

export default class Email extends Component {
  render() {
    const { handleChanges, value } = this.props;
    return (
      <label>
        <input type="email" name='email' onChange={handleChanges} value={value} />
        {!value.length ? 'valor invalido' : 'ok'}
        { !value.match(/^\S+@\S+$/i) ? ' email inválido ' : ' ok ' }
      </label>
    )
  }
}