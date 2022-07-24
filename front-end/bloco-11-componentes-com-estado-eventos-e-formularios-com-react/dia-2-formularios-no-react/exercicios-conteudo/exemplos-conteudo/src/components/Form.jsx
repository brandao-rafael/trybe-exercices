import React, { Component } from 'react'
import Email from './Email'
import InputName from './InputName'
import Select from './Select'

class Form extends Component {
  constructor() {
    super()
    // this.handleChanges = this.handleChanges.bind(this);
    this.state = {
      email: '',
      name: '',
      selectValue: '',
      textareaValue: '',
      checkbox: false,
      formularioComErros: 'true',
    }
  }

  handleChanges = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    }, () => { this.handleError() })
  }

  handleError = () => {
    const {name, email, textareaValue} = this.state;
    const error = [
      !name.length,
      !email.length,
      !textareaValue.length
    ]
    
    const formularioPreenchido = error.every((erro) => erro !== true);

    this.setState({
      formularioComErros: !formularioPreenchido,
    })
  }

  render() {
    return (
      <form>
        <Select handleChanges={ this.handleChanges } value={ this.state.selectValue }/>
        <fieldset>
          <InputName handleChanges={ this.handleChanges } value={ this.state.name } />
          <Email handleChanges={this.handleChanges} value={ this.state.email }/>
        </fieldset>
        <label>
          <textarea name="textareaValue" onChange={this.handleChanges} value={this.state.textareaValue}></textarea>
        </label>
        <label>
          <input type="checkbox" name='checkbox' onChange={this.handleChanges} />
        </label>
        <label>
          <input type="file" />
        </label>
        { this.state.formularioComErros
          ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
          : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }
      </form>
    )
  }
}

export default Form;