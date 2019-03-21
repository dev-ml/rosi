import { createAction, createReducer } from "redux-starter-kit";
import * as cacheManager from "../shared/cacheManager";

const saveStateStarted = createAction("crossslice/savestate/started");
const saveStateSucceeded = createAction("crossslice/savestate/succeeded");
const saveStateFailed = createAction("crossslice/savestate/failed");

const loadStateStarted = createAction("crossslice/loadstate/started");
const loadStateSucceeded = createAction("crossslice/loadstate/succeeded");
const loadStateFailed = createAction("crossslice/loadstate/failed");

export const saveState = () => (dispatch: any, getState: any) => {
  dispatch(saveStateStarted());
  return cacheManager.writeData("state", getState()).then(
    () => dispatch(saveStateSucceeded()),
    (error) => dispatch(saveStateFailed(error)),
  );
};

export const loadState = () => (dispatch: any) => {
  dispatch(loadStateStarted());
  return cacheManager.readData("state").then(
    (state) => dispatch(loadStateSucceeded(state)),
    (error) => dispatch(loadStateFailed(error)),
  );
};

export const crossSliceReducer = (state: any, action: any) => {
  let newState: any = {...state};
  newState.ui = {...newState.ui};

  switch (action.type) {
    case saveStateStarted.toString():
      newState.ui.syncInProgress = true;
      return newState;
    case saveStateSucceeded.toString():
      newState.ui.syncInProgress = false;
      return newState;
    case saveStateFailed.toString():
      newState.ui.syncInProgress = false;
      newState.ui.syncError = action.payload;
      return newState;
    case loadStateStarted.toString():
      newState.ui.syncInProgress = true;
      return newState;
    case loadStateSucceeded.toString():
      newState = {...newState, ...action.payload};
      newState.ui.time = Date.now();
      newState.ui.syncInProgress = false;
      return newState;
    case loadStateFailed.toString():
      newState.ui.syncInProgress = false;
      newState.ui.syncError = action.payload;
      return newState;
    default:
      return state;
  }
};
