import store from '../Store/store';
import allocationSlice from '../Store/Allocation/AllocationSlice';
import Allocation from '../Models/Allocation';
import { start } from 'repl';

export class GoogleApi {
  public get gapi(): any {
    return (window as any)['gapi'];
  }

  public sign: boolean = false;
  public onLoadCallback: any;
  public events: any = {};

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

  private syncToken: string | null = null;

  constructor() {
    this.handleClientLoad();
  }

  /**
   *  On load, called to load the auth2 library and API client library.
   */
  public handleClientLoad() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";
    document.body.appendChild(script);
    script.onload = () => {
      // this.gapi = window['gapi'] as any;
      // this.gapi.load('client:auth2', this.initClient);
      this.gapi.load('client:auth2', () => this.initClient());
    };
    // gapi.load("client:auth2", initClient);
  }

  public handleAuthClick() {
    if (this.gapi) {
      this.gapi.auth2.getAuthInstance().signIn();
    } else {
      console.log("Error: this.gapi not loaded");
    }
  }

  public handleSignoutClick() {
    if (this.gapi) {
      this.gapi.auth2.getAuthInstance().signOut();
    } else {
      console.log("Error: this.gapi not loaded");
    }
  }

  /**
   * Execute the callback function when a user is disconnected or connected with the sign status.
   * @param callback
   */
  public listenSign(callback: Function) {
    if (this.gapi) {
      this.gapi.auth2.getAuthInstance().isSignedIn.listen(callback);
    } else {
      console.log("Error: this.gapi not loaded");
    }
  }

  public sync() {
    // Construct the {@link Calendar.Events.List} request, but don't execute it yet.
    // Calendar.Events.List request = client.events().list("primary");
    let request: any;

    // Load the sync token stored from the last execution, if any.
    if (this.syncToken == null) {
      console.log("Performing full sync.");
      request = this.constructUpcomingEventsRequestFull();
      
      // Set the filters you want to use during the full sync. Sync tokens aren't compatible with
      // most filters, but you may want to limit your full sync to only a certain date range.
      // In this example we are only syncing events up to a year old.
      // Date oneYearAgo = Utils.getRelativeDate(java.util.Calendar.YEAR, -1);
      // request.setTimeMin(new DateTime(oneYearAgo, TimeZone.getTimeZone("UTC")));
    } else {
      console.log("Performing incremental sync.");
      request = this.constructUpcomingEventsRequestPartial();
      request.syncToken = this.syncToken;
    }

    // Retrieve the events, one page at a time.
    // let pageToken = null;
    // let events = null;

    // do {
    // request.pageToken = pageToken;

    // try {
    const singleSync = (pageToken: string | null) => {
      request.pageToken = pageToken;
      console.log('request body: ', request);
      this.gapi.client.calendar.events.list(request)
        .then((response: any) => {
          console.log('synced object: ', response.result);
          console.log('events synced: ', response.result.items);
          this.events = response.result;

          if (this.events.items.length === 0) {
            console.log("No new events to sync.");
          } else {
            for (let event of this.events.items) {
              // console.log('event: ', event);
              // syncEvent(event);
            }
          }

          let pageToken = this.events.nextPageToken;
          if (pageToken) {
            console.log('new pageToken: ', pageToken);
            singleSync(pageToken);
          } else {
            console.log('setting sync Token: ', this.events.nextSyncToken);
            this.syncToken = this.events.nextSyncToken;
            console.log("Sync complete.");
          }

        })
        .catch((err: any) => {
          console.log('Sync Error: ', err);
          if (err.statusCode === 410) {
            // A 410 status code, "Gone", indicates that the sync token is invalid.
            console.log("Invalid sync token, clearing event store and re-syncing.");
            this.syncToken = null;
            this.events = [];
            this.sync();
          } else {
            throw err;
          }
        });
    };

    singleSync(null);
    // pageToken = events.getNextPageToken();
    // } while (pageToken != null);

    // Store the sync token from the last request to be used during the next execution.
    // syncSettingsDataStore.set(SYNC_TOKEN_KEY, events.getNextSyncToken());
    // this.syncToken = this.events.syncToken;
  }

  private constructUpcomingEventsRequestFull(calendarId = "primary", maxResults = 1000) {
    const today = new Date();
    // const tomorrow = new Date();
    // tomorrow.setDate(today.getDate() + 1);
    // tomorrow.setTime(today.getTime() + 30000);
    return {
      'calendarId': calendarId,
      'timeMin': (today).toISOString(),
      // 'timeMax': (tomorrow).toISOString(),
      'singleEvents': true,
      'maxResults': maxResults,
      'syncToken': null as (string | null),
      'pageToken': null as (string | null)
    }
  }

  private constructUpcomingEventsRequestPartial(calendarId = "primary", maxResults = 1000) {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    return {
      'calendarId': calendarId,
      'singleEvents': true,
      'maxResults': maxResults,
      'syncToken': null as (string | null),
      'pageToken': null as (string | null)
    }
  }

  public listUpcomingEvents(maxResults: number) {
    if (this.gapi) {
      return this.gapi.client.calendar.events.list({
        'calendarId': 'primary',
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': maxResults,
        'orderBy': 'startTime'
      }).then((response: any) => {
        console.log('events: ', response.result.items);
        for (let allocation of response.result.items) {
          var a = new Allocation(allocation.summary, "Supernova",
            new Date(allocation.start.dateTime).getTime(),
            new Date(allocation.end.dateTime).getTime())

          // allocation.organizer.displayName
          // status
          // description
          // attendees.length
          store.dispatch(allocationSlice.actions.addAllocation({ ...a }));
        }
      });
    }
    else {
      console.log("Error: this.gapi not loaded");
      return false;
    }
  }

  /**
 * Auth to the google Api.
 */
  private initClient() {
    this.gapi.client.init(this.CONFIG)
      .then(() => {
        // Listen for sign-in state changes.
        this.gapi.auth2.getAuthInstance().isSignedIn.listen((e: any) => this.updateSigninStatus(e));
        // Handle the initial sign-in state.
        this.updateSigninStatus(this.gapi.auth2.getAuthInstance().isSignedIn.get());
        if (this.onLoadCallback) {
          this.onLoadCallback();
        }
      })
      .catch((e: any) => {
        console.log(e);
      });
  }

  private updateSigninStatus(isSignedIn: boolean) {
    if (isSignedIn) {
      // this.listUpcomingEvents(10);
    }
    this.sign = isSignedIn;
  }

}

let apiCalendar: GoogleApi = new GoogleApi();
export default apiCalendar;