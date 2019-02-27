import { createSelector } from "redux-starter-kit";
import Allocation from "../Models/Allocation";
import { Equipment } from "../Models/Equipment";
import Room, { RoomStatus } from "../Models/Room";
import { getRoomAllocations } from "./Allocation/AllocationSelectors";
import { getDate, getSelectedRoomId } from "./UI/UISelectors";

// General
export const isRoomOccupied = (name: string) => createSelector(
  [getDate, getRoomAllocations(name)],
  (date, allocations) => allocations.filter((a: Allocation) => a.from <= date && a.to >= date).length > 0,
);

// Selected Room
export const getSelectedRoom = createSelector(
  [getSelectedRoomId, "room"],
  (roomId, rooms) => rooms.filter((r: Room) => r.name === roomId)[0],
);

// [TODO] rewrite
export const getSelectedRoomAllocations = createSelector(
  [getSelectedRoomId, "allocation"],
  (roomId, allocation) => {
    const allocations: Allocation[] = Object.values(allocation.entity);
    return allocations.filter((a: Allocation) => a.roomName === roomId);
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

export const getSelectedRoomNextAllocation = createSelector(
  [getSelectedRoomFutureNAllocations(1)],
  (allocations) => allocations[0],
);

export const getSelectedRoomCurrentAllocation = createSelector(
  [getSelectedRoomCurrentAllocations],
  (allocations) => allocations[0],
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
  (roomId, equipment) => equipment.filter((e: Equipment) => e.roomName === roomId),
);
