import React, { Component } from 'react';
import bhfLogo from './assets/images/bhflogo140x140.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={bhfLogo} className="App-logo" alt="logo" />
          <h1 className="App-title">British Heart Foundation</h1>
        </header>
        <p className="App-intro">
          Donations will appear here!
        </p>
      </div>
    );
  }
}

export default App;
