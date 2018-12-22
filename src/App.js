import React, { Component } from "react";
import "./App.css";
import Digit from "./Digit";
import Calculator from "./Calculator";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>works with keyboard</h1>
        <h3>(press AC first)</h3>
        <Calculator />
      </div>
    );
  }
}

export default App;
