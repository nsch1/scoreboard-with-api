import React, { Component } from 'react';
import Board from './containers/Board'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">Scoreboard</h1>
        <Board />
      </div>
    );
  }
}

export default App;
