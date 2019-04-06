import React, { Component } from "react";

import "./App.scss";
import Room from "../Room/Room";

class App extends Component {
  public render() {
    return (
      <div className="App">
        <Room />
      </div>
    );
  }
}

export default (App);
