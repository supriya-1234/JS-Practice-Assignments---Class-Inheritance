import React, { Component, useState } from "react";
import "../styles/App.css";
import Circle from "./circle";
import Shape from "./shape";
class App extends Component {
  render() {
    return (
      <>
        <Shape />
        <Circle />
      </>
    );
  }
}

export default App;
