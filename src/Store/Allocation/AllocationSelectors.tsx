import { createSelector } from "redux-starter-kit";
import Allocation from "../../Models/Allocation";

export const getRoomAllocations = (name: string) => createSelector(
  ["allocation"],
  (allocation) => {
    const allocations: Allocation[] = Object.values(allocation.entity);
    return allocations.filter((a: Allocation) => a.roomName === name);
  },
);
