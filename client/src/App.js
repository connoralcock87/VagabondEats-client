import React, { Component } from 'react';
import './App.css';
import Header from './components/Header.js'
// import Login from './components/Login.js'
import MapView from './components/Map.js'
import DropDown from './components/DropDown.js'
// import List from './components/List.js'
import Footer from './components/Footer.js'
import List from './components/List.js'
const url = 'http://localhost:3000/';

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
    mapSelection: null,
    day: null
  }

  updateMap = (key, event) => {
    var day = event.target.id

    var mapSelection = this.state.trucks.filter( truck => {
      return truck.day === day
    })

    this.setState({
      mapSelection: mapSelection
    })
    console.log(this.state);
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
        <DropDown updateMap={this.updateMap}/>
        {this.state.mapSelection &&
          <MapView mapSelection={ this.state.mapSelection }/>
        }
        <List mapSelection={ this.state.mapSelection }/>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
