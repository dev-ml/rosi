import { createSlice } from "redux-starter-kit";

const syncProviderSlice = createSlice({
  slice: "syncProvider",
  initialState: {
    connecting: false,
    connected: false,
    connectionMessage: "",
    errorLog: [] as string[],
    autoSync: false,
    syncSettings: {},
    syncing: false,
    lastSynced: 0,
    syncMessage: ""
  },
  reducers: {
    connectionStarted: (state, action) => {
      state.connecting = true
    },
    connectionSucceeded: (state, action) => {
      state.connecting = false;
      state.connected = true;
      state.autoSync = true;
      state.connectionMessage = "Connection established.";
    },
    connectionFailed: (state, action) => {
      state.connecting = false;
      state.connected = false;
      state.autoSync = false;
      state.connectionMessage = action.payload.message;
      state.errorLog = [ ...state.errorLog, action.payload.error];
    },
    syncStarted: (state, action) => {
      state.syncing = true
    },
    syncSucceeded: (state, action) => {
      state.syncing = false;
      state.lastSynced = Date.now();
      state.syncMessage = "Sync succeeded.";

    },
    syncFailed: (state, action) => {
      state.syncing = false;
      state.syncMessage = action.payload.message;
      state.errorLog = [ ...state.errorLog, action.payload.error];
    },

    setSyncSettings: (state, action) => {
      state.syncSettings = action.payload;
      return state;
    }
  }
});

export default syncProviderSlice