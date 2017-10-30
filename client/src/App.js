import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MapView from './components/Map.js'
import Footer from './components/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Vagabond Eats</h1>
        </header>
        <div className="App-body">
        <MapView />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
