import { uuidv4, roundEpochToMinutes } from "../shared/utility";

export default class Allocation {
  public id: string;
  public confirmed = false;
  public by?: string;
  public attendees?: number;
  public agenda?: string;
  public extId?: string;
  public extStatus?: string;

  // From and to are epochs rounded to minutes
  constructor(public title: string, public roomId: string, public from: number, public to: number) {
    this.id = uuidv4();
    this.from = roundEpochToMinutes(this.from);
    this.to = roundEpochToMinutes(this.to);
  }
}
