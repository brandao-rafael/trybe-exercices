import React, { Component } from 'react'

export default class Select extends Component {
  render() {
    const { handleChanges } = this.props;

    return (
      <label>
        <select name="selectValue" onChange={handleChanges}>
          <option value="mg">MG</option>
          <option value="sp">SP</option>
          <option value="rj">RJ</option>
          <option value="es">ES</option>
        </select>
      </label>
    )
  }
}