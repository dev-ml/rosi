import React from "react";
import apiCalendar from "../../providers/googleApi";

export default class SignInButton {

  constructor(props) {
    super(props);
    this.state = {signedIn: apiCalendar.sign};
    this.handleItemClick = this.handleItemClick.bind(this);
    apiCalendar.onLoadCallback = () => {
      this.setState({signedIn: apiCalendar.sign});
      apiCalendar.listenSign((status) => {
        console.log(status);
        this.setState({
          signedIn: status,
        });
      });
    };
  }

  handleItemClick(event, name) {
    if (name === "sign-in") {
      apiCalendar.handleAuthClick();
    } else if (name === "sign-out") {
      apiCalendar.handleSignoutClick();
    }
  }

  sync() {
    apiCalendar.sync();
  }

  render() {
    const signButton = !this.state.signedIn ?
      <button onClick={(e) => this.handleItemClick(e, "sign-in")}>
        sign-in
      </button>
      :
      <button onClick={(e) => this.handleItemClick(e, "sign-out")}>
        sign-out
      </button>;

    return (
      <>
        {signButton}
        <button onClick={() => this.sync()}>
          sync
        </button>
      </>
    );
  }
}
