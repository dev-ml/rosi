import { createSlice } from "redux-starter-kit";
import Room from "../../models/Room";

// ROOMS ////////////////////////
const roomSlice = createSlice({
  slice: "room",
  initialState: {
    entity: {} as {[id: string]: Room },
    ids: [] as string[],
  },
  reducers: {
    addRoom: (state, action) => {
      state.entity[action.payload.id] = action.payload;
      state.ids.push(action.payload.id);
    },
    changeRoomName: (state, action) => {
      state.entity[action.payload.id].name = action.payload.name;
    }
  },
});

export default roomSlice;
