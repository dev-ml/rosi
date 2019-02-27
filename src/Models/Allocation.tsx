export default class Allocation {
  public id: string;
  public title: string;
  public from: number;
  public to: number;
  public confirmed = false;
  public by?: string;
  public attendees?: number;
  public agenda?: string;

  public roomName: string;

  constructor(_title: string, _roomName: string, _from: number, _to: number) {
    this.id = uuidv4();

    this.title = _title;
    this.roomName = _roomName;
    this.from = _from;
    this.to = _to;
  }
}

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    let r = Math.random() * 16 | 0, v = c == "x" ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
