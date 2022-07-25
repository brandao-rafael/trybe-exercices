import React, { Component } from "react";

export default class SubmitButton extends Component {
  render() {
    const { submitHandler } = this.props;
    return (
      <div>
        <button type="submit" onClick={ submitHandler }>Enviar</button>
      </div>
    )
  }
}