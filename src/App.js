
import Navbar from './Components/navbar'
import Headers from './Components/header';
import React, { Component } from "react";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Headers/>
        <Navbar></Navbar>
      </div>
    );
  }
}

export default App;
