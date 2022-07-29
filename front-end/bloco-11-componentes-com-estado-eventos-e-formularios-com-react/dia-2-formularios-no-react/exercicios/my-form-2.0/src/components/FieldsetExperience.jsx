import React, { Component } from "react";

export default class FieldsetExperience extends Component {
  render() {
    const { onMouseHandler, handleChange } = this.props;
    return(
      <fieldset>
        <label>
          <textarea name="resumeSumary" maxLength="1000" required placeholder="Resumo do curriculum" onChange={ handleChange }></textarea>
        </label>
        <label>
          <textarea name="office" maxLength="40" onMouseEnter={ onMouseHandler } required placeholder="Cargo" onChange={ handleChange }></textarea>
        </label>
        <label>
          <input name="description" type="text" maxLength="500" required placeholder="Descrição do cargo" onChange={ handleChange }/>
        </label>
      </fieldset>
    )
  }
}