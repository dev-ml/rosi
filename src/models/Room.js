import { uuidv4 } from "../shared/utility";

export default class Room {
  public id: string;

  public capacity?: number;
  public location?: string;
  public equipment?: any[];

  // this property is identifier of the object and should be unique
  constructor(public name: string) {
    this.id = uuidv4();
  }
}
