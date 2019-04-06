import Allocation from "../models/Allocation";
import allocationSlice from "../store/Allocation/AllocationSlice";
import store from "../store/store";
import GoogleSyncProvider from "./GoogleSyncProvider";
import ISyncProvider from "./ISyncProvider";

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