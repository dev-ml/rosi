import Allocation from "../models/Allocation";

export default interface ISyncProvider {
  connect(clientId: string, apiKey: string): Promise<string>;
  // disconnect: Promise<string>;

  // Get allocations for next 24 hours
  getAllocations(roomId: string, calendarId: string): Promise<Allocation[]>;
  // onStatusChanged: (status: string) => void;
};
