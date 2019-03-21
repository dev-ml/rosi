import { createSelector } from "redux-starter-kit";

export const getRoomName = (id: string) => createSelector(
  ["room"],
  (room) => room.entity[id].name,
);
