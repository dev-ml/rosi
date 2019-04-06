import React, { Component } from "react";

import "./App.scss";
import Room from "../Room/Room";
import { Provider } from "react-redux";
import store from "../../store/store";

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Room />
        </div>
      </Provider>
    );
  }
}

export default (App);
