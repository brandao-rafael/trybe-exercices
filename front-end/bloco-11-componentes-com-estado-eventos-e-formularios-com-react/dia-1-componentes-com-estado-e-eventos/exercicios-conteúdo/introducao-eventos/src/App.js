import React, { Component } from 'react';
import './App.css';



class App extends Component{
  constructor() {
    super()
    this.listenerEvent1 = this.listenerEvent1.bind(this)
    this.listenerEvent2 = this.listenerEvent2.bind(this)
    this.listenerEvent3 = this.listenerEvent3.bind(this)
    
  }
  listenerEvent1 = () => console.log('botão 1');
  listenerEvent2 = () => console.log('botão 2');
  listenerEvent3 = () => console.log('botão 3');
  render (){
    return (
      <div className="App">
        <button onClick={this.listenerEvent1}>first button</button>
        <button onClick={this.listenerEvent2}>second button</button>
        <button onClick={this.listenerEvent3}>third button</button>
      </div>
    );

  }
}

export default App;
