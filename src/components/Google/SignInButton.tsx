import React, { ReactNode, SyntheticEvent } from "react";
import { GoogleApi } from "../../providers/googleApi";
import GoogleSyncProvider from "../../providers/GoogleSyncProvider";
import ISyncProvider from "../../providers/ISyncProvider";



export default class SignInButton extends React.Component<{roomId: string, googleApi: any}, { signedIn: boolean }> {

    // Client ID and API key from the Developer Console
    // TODO move to state and admin panel
    // private readonly CLIENT_ID = "162342559011-rh81oauc2fut2lj6d03j4srkk3oeea2l.apps.googleusercontent.com";
    // private readonly API_KEY = "AIzaSyBe9hJXEgWHgkhAjqMEnxDtyCQLVCdEByI";
  
    // private readonly CONFIG = {
    //   apiKey: this.API_KEY,
    //   clientId: this.CLIENT_ID,
    //   calendarId: "primary",
    // };

  // private apiCalendar: GoogleApi;
  // private syncProvider: ISyncProvider;   
  
  
  constructor(props: any) {
    console.log("[SignInButton] constructor");
    super(props);
    // this.syncProvider = new GoogleSyncProvider();
    
    
    // this.apiCalendar = this.props.googleApi; 
    // this.state = {signedIn: this.apiCalendar.sign};
    // this.handleItemClick = this.handleItemClick.bind(this);
    // this.apiCalendar.onLoadCallback = () => {
    //   this.setState({signedIn: this.apiCalendar.sign});

    //   this.apiCalendar.listenSign((status: any) => {
    //     console.log(status);
    //     this.setState({
    //       signedIn: status,
    //     });
    //   });

    //   if (!this.apiCalendar.sign) {
    //     this.apiCalendar.handleAuthClick();
    //   }
    // };
  }

  // public handleItemClick(event: SyntheticEvent<any>, name: string): void {
  //   if (name === "sign-in") {
  //     this.apiCalendar.handleAuthClick();
  //   } else if (name === "sign-out") {
  //     this.apiCalendar.handleSignoutClick();
  //   }
  // }


  // public sync() {
  //   setInterval(() => {
  //     console.log("[SignIn button] syncing events in interval");
  //     this.apiCalendar.listUpcomingEvents();
  //   }, 60 * 1000);
  //   // this.apiCalendar.sync();
  // }

  public initClient() {
    // this.apiCalendar.initClient();
  }

  public render(): ReactNode {
    // const signButton = !this.state.signedIn ?
    //   <button type="button" onClick={(e) => this.handleItemClick(e, "sign-in")}>
    //     sign-in
    //   </button>
    //   :
    //   <button type="button" onClick={(e) => this.handleItemClick(e, "sign-out")}>
    //     sign-out
    //   </button>;

    return (
      <>
        {/* <button type="button" onClick={() => this.connect()}>Connect</button>
        <button type="button" onClick={() => this.sync()}>Sync</button> */}
      </>
      // <>
      //   <button type="button" onClick={() => this.initClient()}>
      //     init client
      //   </button>
      //   {signButton}
      //   <button type="button" onClick={() => this.sync()}>
      //     sync
      //   </button>
      // </>
    );
  }
}
