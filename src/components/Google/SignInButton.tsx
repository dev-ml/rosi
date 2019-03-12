import React, { ReactNode, SyntheticEvent } from "react";
import apiCalendar from "../../providers/googleApi";

export default class SignInButton extends React.Component<{}, { signedIn: boolean }> {

  constructor(props: any) {
    super(props);
    this.state = {signedIn: apiCalendar.sign};
    this.handleItemClick = this.handleItemClick.bind(this);
    apiCalendar.onLoadCallback = () => {
      this.setState({signedIn: apiCalendar.sign});
      apiCalendar.listenSign((status: any) => {
        console.log(status);
        this.setState({
          signedIn: status,
        });
      });
    };
  }

  public handleItemClick(event: SyntheticEvent<any>, name: string): void {
    if (name === "sign-in") {
      apiCalendar.handleAuthClick();
    } else if (name === "sign-out") {
      apiCalendar.handleSignoutClick();
    }
  }

  public sync() {
    apiCalendar.sync();
  }

  public render(): ReactNode {
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
