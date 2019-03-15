import Room from "../models/Room";
import Allocation from "../models/Allocation";

export interface IRosiState {
  ui: {
      selectedRoomId: string;
      time: number;
      adminPanelOpen: boolean;
  };
  room: {
      entity: {
          [id: string]: Room;
      };
      ids: string[];
  };
  allocation: {
      entity: {
          [id: string]: Allocation;
      };
      ids: string[];
  };
  equipment: never[];
}