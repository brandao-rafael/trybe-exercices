import React, { Component } from 'react';
import './App.css';
import UserProfile from './components/UserProfile';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showProfile: true,
      apiReturn: '',
      dataReturn: '', 
      loading: true,
    }
  }

  componentDidMount() {
    const URL = 'https://api.randomuser.me/';
    fetch(URL).then((response) => response.json()).then((data) => {
      this.setState({
        apiReturn: data.results,
        loading: false,
      }, this.getData);
    })
  }

  getData = () => {
    const { apiReturn } = this.state;
    const result = apiReturn[0];
    this.setState({
      dataReturn:{
        src: result.picture.medium,
        alt: result.name.last,
        name: `${result.name.first} ${result.name.last}`,
        email: `${result.email}`,
        age: `${result.dob.age}`
      }
    })
  }
  shouldComponentUpdate(_nextProps, nextState) {
    const AGE = 50;
    if (nextState.apiReturn[0].dob.age > AGE) {
      return false;
    }
    return true;
  }

  render() {
    const { loading, dataReturn } = this.state;
    return (
      <div>
        {loading ? <div>loading...</div> : <UserProfile dataReturn={dataReturn} />}
      </div>
    )
  }
}

export default App;
