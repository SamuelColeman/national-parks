import React, { Component } from 'react';
import './App.css';
import { getParks } from '../../apiCalls';

export class App extends Component {
  async componentDidMount() {
    try {
      const parks = await getParks();
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div className="App">
        <h1>National Parks</h1>
      </div>
    );
  }
}

export default App;
