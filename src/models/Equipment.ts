import { EquipmentStatus } from "./EquipmentStatus";
import { EquipmentType } from "./EquipmentType";

export class Equipment {
  constructor(public roomName: string, public type: EquipmentType, public status: EquipmentStatus) {}
}
