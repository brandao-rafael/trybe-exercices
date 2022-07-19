import React, { Component } from "react";
import pokemons from "./data";
import Pokedex from './Pokedex';
import './style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokedex data= { pokemons }/>
      </div>
    );
  }
}

export default App;
