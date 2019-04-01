import { createAction, createReducer } from "redux-starter-kit";
import * as cacheManager from "../shared/cacheManager";

const saveStateStarted = createAction("crossslice/savestate/started")
const saveStateSucceeded = createAction("crossslice/savestate/succeeded")
const saveStateFailed = createAction("crossslice/savestate/failed")

const loadStateStarted = createAction("crossslice/loadstate/started")
const loadStateSucceeded = createAction("crossslice/loadstate/succeeded")
const loadStateFailed = createAction("crossslice/loadstate/failed")

const removeStateStarted = createAction("crossslice/removestate/started")
const removeStateSucceeded = createAction("crossslice/removestate/succeeded")
const removeStateFailed = createAction("crossslice/removestate/failed")

export const saveState = () => (dispatch: any, getState: any) => {
  dispatch(saveStateStarted());
  return cacheManager.writeData("state", getState()).then(
    () => dispatch(saveStateSucceeded()),
    (error) => dispatch(saveStateFailed(error))
  );
};

export const loadState = () => (dispatch: any) => {
  dispatch(loadStateStarted());
  return cacheManager.readData("state").then(
    (state) => dispatch(loadStateSucceeded(state)),
    (error) => dispatch(loadStateFailed(error))
  );
};

export const removeState = () => (dispatch: any) => {
  dispatch(removeStateStarted());
  return cacheManager.removeData("state").then(
    (state) => {
      dispatch(removeStateSucceeded(state));
      dispatch(loadState());
    },
    (error) => dispatch(removeStateFailed(error))
  );
};

export const crossSliceReducer = (state: any, action: any) => {
  let newState: any = {...state};
  newState.ui = {...newState.ui};

  switch (action.type) {
    case "@@INIT":
      newState.ui.selectedRoomId = newState.room.ids[0];
      return newState;
    case removeStateStarted.toString():
      newState.ui.stateSyncInProgress = true;
      return newState;
    case removeStateSucceeded.toString():
      newState.ui.stateSyncInProgress = false;
      return newState;
    case removeStateFailed.toString():
      newState.ui.stateSyncInProgress = false;
      newState.ui.stateSyncError = action.payload;
      return newState;
    case saveStateStarted.toString():
      newState.ui.stateSyncInProgress = true;
      return newState;
    case saveStateSucceeded.toString():
      newState.ui.stateSyncInProgress = false;
      return newState;
    case saveStateFailed.toString():
      newState.ui.stateSyncInProgress = false;
      newState.ui.stateSyncError = action.payload;
      return newState;
    case loadStateStarted.toString():
      newState.ui.stateSyncInProgress = true;
      return newState;
    case loadStateSucceeded.toString():
      // [TODO] if new version arrive, state shuold be cleaned, or retrofitted.
      newState = {...newState, ...action.payload};
      newState.ui.time = Date.now();
      newState.ui.stateSyncInProgress = false;

      return newState;
    case loadStateFailed.toString():
      newState.ui.stateSyncInProgress = false;
      newState.ui.stateSyncError = action.payload;
      return newState;
    default:
      return state;
  }
}
