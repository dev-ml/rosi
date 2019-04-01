import syncProviderSlice from "./SyncProviderSlice";
import * as syncProvider from "../../providers/SyncProvider";
import { getSelectedRoomId } from "../UI/UISelectors";
import { getSyncSettings } from "./SyncProviderSelectors";

export const Connect = () => (dispatch: any, getState: any) => {
  dispatch(syncProviderSlice.actions.connectionStarted());

  const syncSettings = getSyncSettings(getState());

  return syncProvider.Connect(syncSettings.clientId, syncSettings.apiKey).then(
    () => dispatch(syncProviderSlice.actions.connectionSucceeded()),
    (error) => dispatch(syncProviderSlice.actions.connectionFailed({ message: error.message, error: error.message })),
  );
};

export const Disconnect = () => (dispatch: any) => {
  // [TODO];
};

export const Sync = () => (dispatch: any, getState: any) => {
  dispatch(syncProviderSlice.actions.syncStarted());

  const roomId = getSelectedRoomId(getState());
  const syncSettings = getSyncSettings(getState());

  return syncProvider.Sync(roomId, syncSettings.calendarId).then(
    () => dispatch(syncProviderSlice.actions.syncSucceeded()),
    (error) => dispatch(syncProviderSlice.actions.syncFailed({ message: error.message, error: error.message })),
  );
};