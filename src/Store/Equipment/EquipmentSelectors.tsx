import { createSelector } from "redux-starter-kit";
import { Equipment } from "../../models/Equipment";

export const getRoomEquipment = (name: string) => createSelector(
  ["equipment"],
  (equipment) => equipment.filter((e: Equipment) => e.roomName = name),
);
