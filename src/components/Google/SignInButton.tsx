import React, { ReactNode, SyntheticEvent } from "react";
import { GoogleApi } from "../../providers/googleApi";



export default class SignInButton extends React.Component<{roomId: string}, { signedIn: boolean }> {

    // Client ID and API key from the Developer Console
    private readonly CLIENT_ID = "162342559011-rh81oauc2fut2lj6d03j4srkk3oeea2l.apps.googleusercontent.com";
    private readonly API_KEY = "AIzaSyBe9hJXEgWHgkhAjqMEnxDtyCQLVCdEByI";
  
    // Array of API discovery doc URLs for APIs used by the quickstart
    private readonly DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    // Authorization scopes required by the API; multiple scopes can be
    // included, separated by spaces.
    private readonly SCOPES = "https://www.googleapis.com/auth/calendar.readonly";
  
    private readonly CONFIG = {
      apiKey: this.API_KEY,
      clientId: this.CLIENT_ID,
      discoveryDocs: this.DISCOVERY_DOCS,
      scope: this.SCOPES,
    };

  private apiCalendar: GoogleApi;
  
  
  constructor(props: any) {
    
    super(props);
    this.apiCalendar = new GoogleApi(props.roomId, this.CONFIG);

    this.state = {signedIn: this.apiCalendar.sign};
    this.handleItemClick = this.handleItemClick.bind(this);
    this.apiCalendar.onLoadCallback = () => {
      this.setState({signedIn: this.apiCalendar.sign});
      this.apiCalendar.listenSign((status: any) => {
        console.log(status);
        this.setState({
          signedIn: status,
        });
      });
    };
  }

  public handleItemClick(event: SyntheticEvent<any>, name: string): void {
    if (name === "sign-in") {
      this.apiCalendar.handleAuthClick();
    } else if (name === "sign-out") {
      this.apiCalendar.handleSignoutClick();
    }
  }

  public sync() {
    this.apiCalendar.listUpcomingEvents();
    // this.apiCalendar.sync();
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
