import ISyncProvider from "./ISyncProvider";
import GoogleSyncProvider from "./GoogleSyncProvider";
import Allocation from "../models/Allocation";
import { getSelectedRoomId } from "../store/UI/UISelectors";
import store from "../store/store";
import allocationSlice from "../store/Allocation/AllocationSlice";
import { getSyncSettings } from "../store/SyncProvider/SyncProviderSelectors";

const syncProvider: ISyncProvider = new GoogleSyncProvider();

export const Connect = (clientId: string, apiKey: string): Promise<string> => {
  return syncProvider.connect(clientId, apiKey);
};

export const Sync = (roomId: string, calendarId: string): Promise<Allocation[]> => {
  return syncProvider.getAllocations(roomId, calendarId)
    .then((allocations: Allocation[]) => {
      store.dispatch(allocationSlice.actions.syncExternalAllocations(allocations));
      return allocations;
    });;
};