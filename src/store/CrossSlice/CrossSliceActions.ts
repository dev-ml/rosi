import { createAction, createReducer } from "redux-starter-kit";
import * as cacheManager from "../../shared/cacheManager";
import { connect } from "../SyncProvider/SyncProviderActions";
import { isSyncSettingsConfigured } from "../SyncProvider/SyncProviderSelectors";

export const saveStateStarted = createAction("crossslice/savestate/started")
export const saveStateSucceeded = createAction("crossslice/savestate/succeeded")
export const saveStateFailed = createAction("crossslice/savestate/failed")

export const loadStateStarted = createAction("crossslice/loadstate/started")
export const loadStateSucceeded = createAction("crossslice/loadstate/succeeded")
export const loadStateFailed = createAction("crossslice/loadstate/failed")

export const removeStateStarted = createAction("crossslice/removestate/started")
export const removeStateSucceeded = createAction("crossslice/removestate/succeeded")
export const removeStateFailed = createAction("crossslice/removestate/failed")

const prepareCacheState = (state: any): any =>
{
  let cachedState = {...state};
  cachedState.syncProvider = {
    syncSettings: state.syncProvider.syncSettings,
    errorLog: state.syncProvider.errorLog || []
  };
  return cachedState;
};

export const saveState = () => (dispatch: any, getState: any) => {
  dispatch(saveStateStarted());
  return cacheManager.writeData("state", prepareCacheState(getState())).then(
    () => dispatch(saveStateSucceeded()),
    (error) => dispatch(saveStateFailed(error))
  );
};

export const loadState = () => (dispatch: any) => {
  dispatch(loadStateStarted());
  return cacheManager.readData("state").then(
    (state) => dispatch(loadStateSucceeded(state)),
    // [TODO]
    // .then((state: any) => {
    //   if (isSyncSettingsConfigured(state)) {
    //       dispatch(connect());
    //     }
    // }),
    (error) => dispatch(loadStateFailed(error)),
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