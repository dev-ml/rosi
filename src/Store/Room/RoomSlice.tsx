import { createSlice } from "redux-starter-kit";

// ROOMS ////////////////////////
const roomSlice = createSlice({
  slice: "room",
  initialState: [],
  reducers: {
    addRoom: (state, action) => [...state, action.payload] as never[],
  },
});

export default roomSlice;
