import { EquipmentStatus } from "./EquipmentStatus";
import { EquipmentType } from "./EquipmentType";
import { uuidv4 } from "../shared/utility";

export class Equipment {
  public id: string;

  constructor(public roomId: string, public type: EquipmentType, public status: EquipmentStatus) {
    this.id = uuidv4();
  }
}
