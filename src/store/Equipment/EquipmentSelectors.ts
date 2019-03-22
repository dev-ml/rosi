import { createSelector } from "redux-starter-kit";
import { Equipment } from "../../models/Equipment";

export const getRoomEquipment = (id: string) => createSelector(
  ["equipment"],
  (equipment) => equipment.entity.filter((e: Equipment) => e.roomId === id),
);
