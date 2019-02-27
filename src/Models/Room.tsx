export enum RoomStatus {
  occupied = "occupied",
  free = "free",
  awaiting = "awaiting",
}

export default class Room {
  // this property is identifier of the object and should be unique
  public name!: string;
  public capacity?: number;
  public location?: string;
  public equipment?: any[];

  constructor(_name: string) {
    this.name = _name;
  }
}
