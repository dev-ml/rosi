import React, { Component } from "react";

import SelectedRoom from "../SelectedRoom/SelectedRoom";
import "./App.scss";

class App extends Component {
  public render() {
    return (
      <div className="App">
        <SelectedRoom/>
      </div>
    );
  }
}

export default (App);
