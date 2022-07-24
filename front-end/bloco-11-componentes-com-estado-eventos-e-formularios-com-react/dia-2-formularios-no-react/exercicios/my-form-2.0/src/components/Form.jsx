import React, { Component } from "react";
import FieldsetPerson from "./FieldsetPerson";

export default class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
      state: '',
      residence:'',
    }
  }

  handleChange({ target }) {
    let { name, value } = target;
    if (name === 'name') value = value.toUpperCase();
    if (name === 'adress') value = value.replace(/[^a-zA-Z0-9]/g,'')

    this.setState({
      [name]: value
    })
  }

  onBlurHandler = ({ target }) => {
    let { name, value } = target;

    if (name === 'city') value = value.match(/^\d/) ? target.value = '' : value;

    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <form>
        <FieldsetPerson handleChange={ this.handleChange } onBlurHandler={ this.onBlurHandler }/>
      </form>
    )
  }
}