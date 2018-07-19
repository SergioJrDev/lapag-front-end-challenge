import React, { Component } from "react";
import logo from "./logo-white.png";
import { DatePicker } from './components'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Front-End Challenge</h1>
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">Start the test here!</p>
        <DatePicker onChangeHandler={() => {}} />
      </div>
    );
  }
}

export default App;
