import Allocation from "../models/Allocation";
import ISyncProvider from "./ISyncProvider";

export class GoogleSyncProvider implements ISyncProvider {

  private get gapi(): any {
    return (window as any).gapi;
  }

  // Array of API discovery doc URLs for APIs used by the quickstart
  private readonly DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
  private readonly SCOPES = "https://www.googleapis.com/auth/calendar.readonly";

  private readonly CONFIG = {
    apiKey: "[googleApi] apiKey not provided!!",
    clientId: "[googleApi] clientId not provided!!",
    discoveryDocs: this.DISCOVERY_DOCS,
    scope: this.SCOPES,
  };

  constructor() {
    this.handleClientLoad();
  }

  public connect(clientId: string, apiKey: string): Promise<string> {
    try {
      if (!clientId || !apiKey) {
        console.log("[GoogleSyncProvider] Connect error. Both clientId and apiKey need to be provided.");
        return Promise.reject(new Error(`[GoogleSyncProvider] Connect error. Both clientId and apiKey need to be provided.`));
      }

      this.CONFIG.clientId = clientId;
      this.CONFIG.apiKey = apiKey;

      if (this.gapi && this.gapi.client) {
        console.log("[GoogleSyncProvider] Begin initClient, Config: ", this.CONFIG);

        return this.initClient(this.CONFIG);
      } else {
        return Promise.reject(new Error(`[GoogleSyncProvider] Connect gapi client not loaded error`));
      }
    } catch (error) {
      return Promise.reject(new Error(`[GoogleSyncProvider] Connect unknown error: ${error}`));
    }

  };

  // Get allocations for next 24 hours
  getAllocations(roomId: string, calendarId: string): Promise<Allocation[]> {
    console.log("[GoogleSyncProvider] getAllocations");
    try {
      if (!roomId || !calendarId) {
        console.log("[GoogleSyncProvider] getAllocations error. Both roomId and calendarId need to be provided.");
        return Promise.reject(new Error(`[GoogleSyncProvider] Connect error. Both roomId and calendarId need to be provided.`));
      };

      if (this.gapi) {
        console.log("[GoogleSyncProvider] gapi.client.calendar.events.list for calendarId: ", calendarId);
        if (this.gapi.client && this.gapi.client.calendar) {
          return this.fetchEvents(roomId, calendarId);
        } else {
          console.log("[GoogleSyncProvider] Error: gapi.client or gapi.client.calendar not loaded");
          // This mostly means not connected
          return Promise.reject(new Error(`[GoogleSyncProvider] gapi.client or gapi.client.calendar not loaded`));
        }
      } else {
        console.log("[GoogleSyncProvider] Error: gapi not loaded");
        return Promise.reject(new Error(`[GoogleSyncProvider] this.gapi not loaded`));
      }
    } catch (error) {
      console.log("[GoogleSyncProvider] Error: unknown error", error);
      return Promise.reject(new Error(`[GoogleSyncProvider] Connect unknown error: ${error}`));
    }
  }

  fetchEvents(roomId: string, calendarId: string): Promise<Allocation[]> {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    return this.gapi.client.calendar.events.list({
      calendarId,
      orderBy: "startTime",
      maxResults: 1000,
      showDeleted: true,
      singleEvents: true,
      timeMin: today.toISOString(),
      timeMax: tomorrow.toISOString(),
    }).then((response: any) => {
      console.log("[GoogleSyncProvider] succesful events retrieved: ", response.result.items);
      return this.syncEvents(roomId, response.result.items);
    }).catch((error: any) => {
      console.log("[GoogleSyncProvider] error while events retrievel: ", error);
      return Promise.reject(new Error(`[GoogleSyncProvider] error while events retrievel:", ${error}`));
    });
  }

  private handleClientLoad() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/api.js";
    document.body.appendChild(script);
    script.onload = () => {
      // [TODO] can we also have error callback?
      this.gapi.load("client:auth2", () => console.log("[Google Api] gapi loaded"));
    };
  }

  private initClient(config: any): Promise<any> {
    return this.gapi.client.init(config)
      .then(() => {
        console.log("[GoogleSyncProvider] Client init success");

        // Why is sometimes getauthinstance null?
        return this.gapi.auth2.getAuthInstance().signIn()
          .then((user: any) => {
            console.log(`[GoogleSyncProvider] Authorization successfull`, user);
          })
          .catch((error: any) => {
            console.log(`[GoogleSyncProvider] Authorization error`, error);
          });
      })
      .catch((error: any) => {
        console.log("[GoogleSyncProvider] Client init error:", error);
        return Promise.reject(new Error(`[GoogleSyncProvider] Client init error:", ${error}`));
      });
  }

  private syncEvents(roomId: string, events: any): Allocation[] {
    console.log("[GoogleSyncProvider] SyncEvents: ", events);
    const mappedEvents = events.map((event: any) => {
      const a = new Allocation(
        event.summary,
        roomId,
        new Date(event.start.dateTime).getTime(),
        new Date(event.end.dateTime).getTime());
      if (event.attendees) {
        a.attendees = event.attendees.length;
      }
      if (event.organizer && event.organizer.displayName) {
        a.by = event.organizer.displayName;
      }
      a.extId = event.id;
      a.extStatus = event.status;
      return { ...a };
    });

    console.log("[GoogleSyncProvider] mappedEvents: ", mappedEvents);
    return mappedEvents;
  }

}

export default GoogleSyncProvider;
