import syncProviderSlice from "./SyncProviderSlice";
import * as syncProvider from "../../providers/SyncProvider";
import { getSelectedRoomId } from "../UI/UISelectors";
import { getSyncSettings } from "./SyncProviderSelectors";

export const connect = () => (dispatch: any, getState: any) => {
  dispatch(syncProviderSlice.actions.connectionStarted());

  const syncSettings = getSyncSettings(getState());
  console.log(`[SyncProviderActions] connect with clientId ${syncSettings.clientId} apiKey: ${syncSettings.apiKey}`);

  return syncProvider.Connect(syncSettings.clientId, syncSettings.apiKey).then(
    () => dispatch(syncProviderSlice.actions.connectionSucceeded()),
    (error) => dispatch(syncProviderSlice.actions.connectionFailed({ message: error.message, error: error.message })),
  );
};

export const disconnect = () => (dispatch: any) => {
  // [TODO];
};

export const sync = () => (dispatch: any, getState: any) => {
  dispatch(syncProviderSlice.actions.syncStarted());

  const roomId = getSelectedRoomId(getState());
  const syncSettings = getSyncSettings(getState());

  return syncProvider.Sync(roomId, syncSettings.calendarId).then(
    () => dispatch(syncProviderSlice.actions.syncSucceeded()),
    (error) => dispatch(syncProviderSlice.actions.syncFailed({ message: error.message, error: error.message })),
  );
};