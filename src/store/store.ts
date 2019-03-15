import { combineReducers } from "redux";
import { configureStore } from "redux-starter-kit";
import allocationSlice from "./Allocation/AllocationSlice";
import equipmentSlice from "./Equipment/EquipmentSlice";
import roomSlice from "./Room/RoomSlice";
import uiSlice from "./UI/UISlice";
import reduceReducers from "reduce-reducers";
import { crossSliceReducer } from "./crossSliceReducer";

///////////////////////////////////////////////////////////////
// Store Config
///////////////////////////////////////////////////////////////

const combinedReducers = combineReducers({
  ui: uiSlice.reducer,
  room: roomSlice.reducer,
  allocation: allocationSlice.reducer,
  equipment: equipmentSlice.reducer,
});

const rootReducer = reduceReducers(combinedReducers, crossSliceReducer);

const store = configureStore({ reducer: rootReducer });

export default store;

///////////////////////////////////////////////////////////////
// Selectors
///////////////////////////////////////////////////////////////

// DateTime testing
// const getDateTime = minuteInterval => {
//   const coeff = 1000 * 60 * minuteInterval
//   const now = new Date()
//   return new Date(Math.floor(now.getTime() / coeff) * coeff)
// }

// const dateEqualSelector = createSelectorCreator(
//   defaultMemoize,
//   (a,b) => {
//     return a.getTime() === b.getTime()
//   }
// )
// const intervalSelector = () => getDateTime(1)

// export const selectDateTime = dateEqualSelector(
//   intervalSelector,
//   (interval) => interval
// )

// export const isSelectedRoomOccupied2 = createSelector(
//   [selectDateTime, getSelectedRoomId, 'allocation'],
//   (date, roomId, allocation) => {
//     console.log('isSelectedRoomOccupied2:', date.getTime());
//     return allocation.filter(a => a.roomName === roomId).filter(a => a.from <= date && a.to >= date).length > 0;
//   }
// )
