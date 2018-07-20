import React, { Component } from "react";
import AppRoute from './routes'
import { Provider } from 'react-redux';
import Store from './store'
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <AppRoute />
      </Provider>
    );
  }
}

export default App;
