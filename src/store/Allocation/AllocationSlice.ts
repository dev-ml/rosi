import { createSlice } from "redux-starter-kit";
import Allocation from "../../models/Allocation";
import { roundEpochToMinutes } from "../../shared/utility";

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
    deleteAllocation: (state, action) => {
      delete state.entity[action.payload.id];
      // this operation can be costly
      state.ids = state.ids.filter((id: string) => id !== action.payload.id);
    },
    finishEarly: (state, action) => {
      state.entity[action.payload.id].to = roundEpochToMinutes(action.payload.time);
      state.entity[action.payload.id].confirmed = true;
    },
    extendMeeting: (state, action) => {
      state.entity[action.payload.id].to += action.payload.amount;
      state.entity[action.payload.id].confirmed = true;
    },
    confirmMeeting: (state, action) => {
      state.entity[action.payload.id].confirmed = true;
      state.entity[action.payload.id].from = roundEpochToMinutes(action.payload.time);
    },
    // [TODO] sync adhoc meetings to external source
    syncExternalAllocations: (state, action) => {
      console.log("[AllocationSlice:syncExternalAllocations] : ", action);
      // [TODO] Delete objects with extId && !confirmed && not in newAllocations
      const newAllocations: Allocation[] = action.payload;
      const expiredAllocations = Object.values(state.entity).filter((sa: Allocation) => !!sa.extId && !sa.confirmed && !newAllocations.find((a: Allocation) => a.extId === sa.extId));
      for (const deleteAllocation of expiredAllocations) {
        delete state.entity[deleteAllocation.id];
        // this operation can be costly
        state.ids = state.ids.filter((id: string) => id !== deleteAllocation.id);
      };

      // For each allocation in payload
      for (const allocation of newAllocations) {
        // check if exist entry with extId = id
        const foundAllocation = Object.values(state.entity).find((sa: Allocation) => sa.extId === allocation.extId);
        if (foundAllocation) {
          // if exists entry then check the status !== confirmed, if yes delete, else update 
          if (allocation.extStatus !== "confirmed") {
            delete state.entity[foundAllocation.id];
            // this operation can be costly
            state.ids = state.ids.filter((id: string) => id !== foundAllocation.id);
          } else {
            // update if meeting isn't yet confirmed 
            if (!foundAllocation.confirmed) {
              foundAllocation.from = allocation.from;
              foundAllocation.to = allocation.to;
              foundAllocation.title = allocation.title;
            }
          }
        } else {
          // if no entry check status === confirmed, if yes add
          if (allocation.extStatus === "confirmed") {
            state.entity[allocation.id] = allocation;
            state.ids.push(allocation.id);
          }
        }
      }
    }
  },
});

export default allocationSlice;
