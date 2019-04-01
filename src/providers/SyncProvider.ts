import ISyncProvider from "./ISyncProvider";
import GoogleSyncProvider from "./GoogleSyncProvider";
import Allocation from "../models/Allocation";
import { getSelectedRoomId, getSyncSettings } from "../store/UI/UISelectors";
import store from "../store/store";
import allocationSlice from "../store/Allocation/AllocationSlice";

const syncProvider: ISyncProvider = new GoogleSyncProvider();

export const Connect = (clientId: string, apiKey: string): Promise<string> => {
  return syncProvider.connect(clientId, apiKey);
}

export const SyncDefault = (): Promise<Allocation[]> => {
  const roomId = getSelectedRoomId(store.getState());
  const syncSettings = getSyncSettings(store.getState());
  return Sync(roomId, syncSettings.calendarID);
}

export const Sync = (roomId: string, calendarId: string): Promise<Allocation[]> => {
  return syncProvider.getAllocations(roomId, calendarId)
    .then((allocations: Allocation[]) => {
      store.dispatch(allocationSlice.actions.syncExternalAllocations(allocations));
      return allocations;
    });;
}