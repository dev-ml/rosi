import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./Assets/symbol-defs.svg";
import App from "./containers/App/App";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import start from "./store/start";
import store from "./store/store";

start();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
