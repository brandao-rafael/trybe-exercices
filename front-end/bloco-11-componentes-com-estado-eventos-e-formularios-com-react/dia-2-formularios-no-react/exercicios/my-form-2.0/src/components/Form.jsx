import React, { Component } from "react";
import FieldsetExperience from "./FieldsetExperience";
import FieldsetPerson from "./FieldsetPerson";
import SubmitButton from "./SubmitButton";
import FormDataDisplay from "./FormDataDisplay";
import Clear from "./Clear";

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
      state: 'AC',
      residence:'',
      resumeSumary: '',
      office: '',
      description: '',
      firstExecution: true,
      submit: false,
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

  onMouseHandler = () => {
    if (this.state.firstExecution){
      alert(`Preencha com cuidado essa informação!`);
      this.setState({
        firstExecution: false,
      })
    }  
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.setState({
      submit: true,
    })
  }

  clearHandler = (event) => {
    event.preventDefault();
    this.setState({
      submit: false,
    })
  }
    

  render() {
    const { submit } = this.state;
    return (
      <form>
        <FieldsetPerson handleChange={ this.handleChange } onBlurHandler={ this.onBlurHandler }/>
        <FieldsetExperience onMouseHandler={ this.onMouseHandler } handleChange={ this.handleChange }/>
        <div>
          <SubmitButton submitHandler={ this.submitHandler }/>
          <Clear clearHandler= { this.clearHandler } />
        </div>
        { submit && <FormDataDisplay currentState={ this.state } /> }
      </form>
    )
  }
}