import { createSelector } from "redux-starter-kit";

export const getRoomName = (index: number) => createSelector(
  ["room"],
  (room) => room[index].name,
);
