import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
// import Login from './components/Login.js'
import MapView from './components/Map.js'
import DropDown from './components/DropDown.js'
// import List from './components/List.js'
import Footer from './components/Footer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-body">
        <MapView />
        <DropDown />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
