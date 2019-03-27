import { createSlice } from "redux-starter-kit";

// UI ////////////////////////
const uiSlice = createSlice({
  slice: "ui",
  initialState: {
    selectedRoomId: "",
    time: Date.now(),
    adminPanelOpen: false,
    syncSettings: {},
    syncInProgress: false,
    syncError: ""
  },
  reducers: {
    setSelectedRoomId: (state, action) => {
      state.selectedRoomId = action.payload;
      return state;
    },
    setTime: (state, action) => {
      state.time = action.payload;
      return state;
    },
    showAdminPanel: (state) => {
      state.adminPanelOpen = true;
      return state;
    },
    hideAdminPanel: (state) => {
      state.adminPanelOpen = false;
      return state;
    },
    setSyncSettings: (state, action) => {
      state.syncSettings = action.payload;
      return state;
    }
  },
});

export default uiSlice;
