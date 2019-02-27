import { createSelector } from "redux-starter-kit";

export const getDate = createSelector (
  ["ui.time"],
);

export const getSelectedRoomId = createSelector(
  ["ui.selectedRoomId"],
);
