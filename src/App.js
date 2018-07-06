//@ts-check
import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import TakeAPenny from './modules/take-a-penny';
import HomePage from './views/HomePage';
import { Route } from 'react-router-dom';
import commonEmitter from './modules/eventEmitter';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Nothing to see here.",
      games: {},
      tap: new TakeAPenny()
    }
  }
  componentDidMount() {
    this.state.tap.connect();
    axios.get('/test')
    .then(response => {
      this.setState({
        ...this.state,
        message: response.data
      });
    })
    .catch(error => {
      alert(error);
    })
  }

  renderGames() {
    
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Route path="/" exact component={HomePage}/>
      </div>
    );
  }
}

export default App;
