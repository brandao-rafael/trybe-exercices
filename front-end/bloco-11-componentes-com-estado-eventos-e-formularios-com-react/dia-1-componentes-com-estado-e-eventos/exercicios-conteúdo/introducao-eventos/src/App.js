import React, { Component } from 'react';
import './App.css';



class App extends Component{
  constructor() {
    super()
    this.state = {
      clicksFirst: 0,
      clicksSecond: 0,
      clicksThird: 0, 
    }
    this.listenerEvent = this.listenerEvent.bind(this)
    
  }
  
  listenerEvent = (btn) => {
    if (btn === 1 ){ 
      this.setState((estadoAnterior, _props) => ({
        clicksFirst: estadoAnterior.clicksFirst + 1
      }), () => {
      console.log(`Botão 1: ${this.changeColor(this.state.clicksFirst)}`);
      });
    } else if (btn === 2) {
      this.setState((estadoAnterior, _props) => ({
        clicksSecond: estadoAnterior.clicksSecond + 1
      }), () => {
        console.log(`Botão 2: ${this.changeColor(this.state.clicksSecond)}`);
      });
    } else {
      this.setState((estadoAnterior, _props) => ({
        clicksThird: estadoAnterior.clicksThird + 1
      }), () => {
        console.log(`Botão 3: ${this.changeColor(this.state.clicksThird)}`);
      })
    }
  }

  changeColor = (value) => {
    if (value % 2 === 0) {
      return 'green'
    } else {
      return 'white'
    }
  }

  render (){
    const { clicksFirst, clicksSecond, clicksThird } = this.state;
    return (
      <div className="App">
        <button onClick={() => this.listenerEvent(1)} style={{backgroundColor: this.changeColor(clicksFirst)}}>{`cliques: ${this.state.clicksFirst}`}</button>
        <button onClick={() => this.listenerEvent(2)} style={{backgroundColor: this.changeColor(clicksSecond)}}>{`cliques: ${this.state.clicksSecond}`}</button>
        <button onClick={() => this.listenerEvent(3)} style={{backgroundColor: this.changeColor(clicksThird)}}>{`cliques: ${this.state.clicksThird}`}</button>
      </div>
    );

  }
}

export default App;
