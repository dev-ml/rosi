import React, { Component } from "react";

import "./App.scss";
import SelectedRoom from "./Containers/SelectedRoom/SelectedRoom";

class App extends Component {
  public render() {
    console.log("hello world", "test");
    return (
      <div className="App">
        <SelectedRoom/>
      </div>
    );
  }
}

export default (App);
