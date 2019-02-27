export enum EquipmentType {
  Projector = "display",
  WhiteBoard = "users",
  Skype = "skype",
}

export enum EquipmentStatus {
  Available = "Available",
  NotAvailable = "NotAvailable",
  Broken = "Broken",
}

export class Equipment {
  constructor(public roomName: string, public type: EquipmentType, public status: EquipmentStatus) {}
}
