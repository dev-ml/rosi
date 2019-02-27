import { createSlice } from "redux-starter-kit";

// UI ////////////////////////
const uiSlice = createSlice({
  slice: "ui",
  initialState: {
    selectedRoomId: "",
    time: Date.now(),
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
  },
});

export default uiSlice;
