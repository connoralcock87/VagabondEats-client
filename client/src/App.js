import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
// import Login from './components/Login.js'
import MapView from './components/Map.js'
import DropDown from './components/DropDown.js'
// import List from './components/List.js'
import Footer from './components/Footer.js'
import List from './components/List.js'
const url = 'http://localhost:3000';

class App extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     property: value,
  //
  //   }
  // }

  state = {
    trucks: null,

  }

  componentWillMount() {
    fetch(url)
      .then(response => {
        return response.json()
      })
      .then(response => {
        this.setState({
          trucks: response
        })
        console.log(this.state.trucks)
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-body">
        <DropDown />
        <MapView trucks={ this.state.trucks }/>
        <List trucks={ this.state.trucks }/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
