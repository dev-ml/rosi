import { createSelector } from "redux-starter-kit";
import Allocation from "../models/Allocation";
import { Equipment } from "../models/Equipment";
import Room from "../models/Room";
import { RoomStatus } from "../models/RoomStatus";
import { getRoomAllocations } from "./Allocation/AllocationSelectors";
import { getDate, getSelectedRoomId } from "./UI/UISelectors";
import timeView from "../components/Room/TimeView/TimeView";
import { getRoomEquipment } from "./Equipment/EquipmentSelectors";

// General
export const isRoomOccupied = (name: string) => createSelector(
  [getDate, getRoomAllocations(name)],
  (date, allocations) => allocations.filter((a: Allocation) => a.from <= date && a.to >= date).length > 0,
);

// Selected Room
export const getSelectedRoom = createSelector(
  [getSelectedRoomId, "room"],
  (roomId, rooms) => rooms.entity[roomId],
);

// [TODO] rewrite
export const getSelectedRoomAllocations = createSelector(
  [getSelectedRoomId, "allocation"],
  (roomId, allocation) => {
    const allocations: Allocation[] = Object.values(allocation.entity);
    return allocations.filter((a: Allocation) => a.roomId === roomId);
  },
);
// export const getSelectedRoomAllocations = createSelector(
//   [getSelectedRoomId],
//   (roomId) => getRoomAllocations(roomId)
// );

export const getSelectedRoomCurrentAllocations = createSelector(
  [getDate, getSelectedRoomAllocations],
  (date, allocations) => allocations.filter((a: Allocation) => a.from <= date && a.to >= date),
);

export const getSelectedRoomFutureAllocations = createSelector(
  [getDate, getSelectedRoomAllocations],
  (date, allocations) => allocations.filter((a: Allocation) => a.from >= date),
);

export const getSelectedRoomFutureAllocationsSorted = createSelector(
  [getSelectedRoomFutureAllocations],
  (allocations) => allocations.sort((a: Allocation, b: Allocation) => a.from - b.from),
);

export const getSelectedRoomFutureNAllocations = (n: number) => createSelector(
  [getSelectedRoomFutureAllocationsSorted],
  (allocations) => allocations.slice(0, n),
);

export const getSelectedRoomFutureAllocationsForNextNMinutes = (n: number) => createSelector(
  [getSelectedRoomFutureAllocationsSorted, getDate],
  (allocations: Allocation[], time: number) => allocations.filter((a: Allocation) => a.to < time + n * 60 * 1000),
);

export const getSelectedRoomNextAllocation = createSelector(
  [getSelectedRoomFutureNAllocations(1)],
  (allocations) => allocations[0],
);

export const getSelectedRoomNextAllocationTimeToBegin = createSelector(
  [getSelectedRoomNextAllocation, getDate],
  (allocation: Allocation, time: number) => allocation.from - time,
);

export const getSelectedRoomCurrentAllocation = createSelector(
  [getSelectedRoomCurrentAllocations],
  (allocations) => allocations[0],
);

export const getSelectedRoomCurrentAllocationLength = createSelector(
  [getSelectedRoomCurrentAllocation],
  (allocation: Allocation) => allocation.to - allocation.from,
);

export const getSelectedRoomCurrentAllocationTimeToEnd = createSelector(
  [getSelectedRoomCurrentAllocations, getDate],
  (allocation: Allocation, time: number) => allocation.to - time,
);

export const isSelectedRoomOccupied = createSelector(
  [getSelectedRoomCurrentAllocations],
  (allocations) => {
    return allocations.length > 0;
  },
);

export const getSelectedRoomStatus = (threshold: number) => createSelector(
  [getSelectedRoomCurrentAllocation, getSelectedRoomNextAllocation, getDate],
  (currentAllocation: Allocation, nextAllocation: Allocation, time: number) => {
    if (currentAllocation) {
      if (currentAllocation.confirmed) {
        return RoomStatus.occupied;
      } else {
        return RoomStatus.awaiting;
      }
    } else if (nextAllocation) {
      if (nextAllocation.from - time < threshold) {
        if (nextAllocation.confirmed) {
          return RoomStatus.occupied;
        } else {
          return RoomStatus.awaiting;
        }
      }
    }

    return RoomStatus.free;
  },
);

export const getSelectedRoomEquipment = createSelector(
  [getSelectedRoomId, "equipment"],
  (roomId, equipment) => {
    const equipmentArray: Equipment[] = Object.values(equipment.entity) || [];
    return equipmentArray.filter((e: Equipment) => e.roomId === roomId);
  }
);
