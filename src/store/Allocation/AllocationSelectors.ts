import { createSelector } from "redux-starter-kit";
import Allocation from "../../models/Allocation";

export const getRoomAllocations = (id: string) => createSelector(
  ["allocation"],
  (allocation) => {
    const allocations: Allocation[] = Object.values(allocation.entity);
    return allocations.filter((a: Allocation) => a.roomId === id);
  },
);
