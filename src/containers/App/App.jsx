import React, { Component } from "react";

import SelectedRoom from "../SelectedRoom/SelectedRoom";
import "./App";

type Props = {
};

class App extends Component<Props> {
  render() {
    console.log("hello world", "test");
    
    let b = 2 + "2";
    
    return (
      <div className="App">
        <SelectedRoom/>
      </div>
    );
  }
}

export default (App);
