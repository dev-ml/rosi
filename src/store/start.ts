import { roundEpochToMinutes } from "../shared/utility";
import { loadState, saveState } from "./CrossSlice/CrossSliceActions";
import store from "./store";
import { sync, connect } from "./SyncProvider/SyncProviderActions";
import { hasAutoSync } from "./SyncProvider/SyncProviderSelectors";
import uiSlice from "./UI/UISlice";
import { oneMinute } from "../shared/consts";

// 1 minute refresh interval for timer
const refreshInterval = oneMinute;

///////////////////////////////////////////////////////////////
// Starting init
///////////////////////////////////////////////////////////////
const start = () => {
  const startState = store.getState();
  console.log("[Start] startState:", startState);
  store.dispatch(loadState());
  store.dispatch(connect());

  // [TODO] once a day clean old entries
  setInterval(() => {
    console.log("[Start] Interval");
    // Set time to be alway 1 milliesecond after full minute
    store.dispatch(uiSlice.actions.setTime(roundEpochToMinutes(Date.now()) + 1));

    // [TODO] save state interval
    store.dispatch(saveState());

    // [TODO] sync interval
    // [TODO] check if connected, can also be done in syncdefault


    if (hasAutoSync(store.getState())) {
      store.dispatch(sync());
    }

  }, refreshInterval);

};

export default start;
