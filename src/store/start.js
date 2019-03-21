import store from "./store";

import uiSlice from "./UI/UISlice";
import { loadState, saveState } from "./crossSliceReducer";

///////////////////////////////////////////////////////////////
// Starting init
///////////////////////////////////////////////////////////////
const start = () => {
  const startState = store.getState();
  console.log("[Start] startState:", startState);
  store.dispatch(loadState());

  setInterval(() => {
    console.log("[Start] Interval");
    store.dispatch(uiSlice.actions.setTime(Date.now()));
    store.dispatch(saveState());
  }, 1000 * 60);




};

export default start;
