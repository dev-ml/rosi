import { uuidv4 } from "../shared/utility";

export default class Allocation {
  public id: string;
  public confirmed = false;
  public by?: string;
  public attendees?: number;
  public agenda?: string;

  constructor(public title: string, public roomId: string, public from: number, public to: number) {
    this.id = uuidv4();
  }
}
