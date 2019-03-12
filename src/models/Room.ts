export enum RoomStatus {
  occupied = "occupied",
  free = "free",
  awaiting = "awaiting",
}

export default class Room {
  public capacity?: number;
  public location?: string;
  public equipment?: any[];

  // this property is identifier of the object and should be unique
  constructor(public name: string) {
  }
}
