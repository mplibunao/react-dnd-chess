import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from "./Board/";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Board knightPosition={[1, 5]} />
      </div>
    );
  }
}

export default App;
