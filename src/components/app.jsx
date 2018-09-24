import React, { Component } from 'react';
import Navbar from './navbar'
import MainContainer from './main_container'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <MainContainer />
      </div>
    );
  }
}
