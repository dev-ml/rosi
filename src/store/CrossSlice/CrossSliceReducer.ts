import { createAction, createReducer } from "redux-starter-kit";
import * as cacheManager from "../../shared/cacheManager";
import * as actions from "./CrossSliceActions";

export const crossSliceReducer = (state: any, action: any) => {
  let newState: any = {...state};
  newState.ui = {...newState.ui};

  switch (action.type) {
    case "@@INIT":
      newState.ui.selectedRoomId = newState.room.ids[0];
      return newState;
    case actions.removeStateStarted.toString():
      newState.ui.stateSyncInProgress = true;
      return newState;
    case actions.removeStateSucceeded.toString():
      newState.ui.stateSyncInProgress = false;
      return newState;
    case actions.removeStateFailed.toString():
      newState.ui.stateSyncInProgress = false;
      newState.ui.stateSyncError = action.payload;
      return newState;
    case actions.saveStateStarted.toString():
      newState.ui.stateSyncInProgress = true;
      return newState;
    case actions.saveStateSucceeded.toString():
      newState.ui.stateSyncInProgress = false;
      return newState;
    case actions.saveStateFailed.toString():
      newState.ui.stateSyncInProgress = false;
      newState.ui.stateSyncError = action.payload;
      return newState;
    case actions.loadStateStarted.toString():
      newState.ui.stateSyncInProgress = true;
      return newState;
    case actions.loadStateSucceeded.toString():
      // [TODO] if new version arrive, state shuold be cleaned, or retrofitted.
      newState = {...newState, ...action.payload};
      newState.ui.time = Date.now();
      newState.ui.stateSyncInProgress = false;

      return newState;
    case actions.loadStateFailed.toString():
      newState.ui.stateSyncInProgress = false;
      newState.ui.stateSyncError = action.payload;
      return newState;
    default:
      return state;
  }
}
