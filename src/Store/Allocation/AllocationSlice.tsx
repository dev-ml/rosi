import { createSlice } from "redux-starter-kit";
import Allocation from "../../Models/Allocation";

// ALLOCATIONS ////////////////////////
const allocationSlice = createSlice({
  slice: "allocation",
  initialState: {
    entity: {} as {[id: string]: Allocation },
    ids: [] as string[],
  },
  reducers: {
    addAllocation: (state, action) => {
      state.entity[action.payload.id] = action.payload;
      state.ids.push(action.payload.id);
    },
    finishEarly: (state, action) => {
      state.entity[action.payload].to = Date.now() - 60000;
    },
    extendMeeting: (state, action) => {
      state.entity[action.payload.id].to += action.payload.amount;
      state.entity[action.payload.id].confirmed = true;
    },
    confirmMeeting: (state, action) => {
      state.entity[action.payload.id].confirmed = true;
      state.entity[action.payload.id].from = Date.now() - 60000;
    },
  },
});

export default allocationSlice;
