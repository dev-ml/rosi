import { createSlice } from "redux-starter-kit";
import { Equipment } from "../../models/Equipment";
import { EquipmentStatus } from "../../models/EquipmentStatus";

// EQUIPMENT ////////////////////////
// [TODO] add ids
const equipmentSlice = createSlice({
  slice: "equipment",
  initialState: [],
  reducers: {
    addEquipment: (state, action) => [...state, action.payload] as never[],
    setStatus: (state, action) => {
      const equipment: Equipment =
        state.filter((eq: Equipment) => eq.roomName === action.payload.roomName && eq.type === action.payload.type)[0];
      equipment.status = action.payload.status;
      return state;
    },
    changeStatus: (state, action) => {
      const equipment: Equipment =
        state.filter((eq: Equipment) => eq.roomName === action.payload.roomName && eq.type === action.payload.type)[0];
      let newStatus: EquipmentStatus = EquipmentStatus.Available;
      switch (equipment.status) {
        case EquipmentStatus.Available:
          newStatus = EquipmentStatus.Broken;
          break;
        case EquipmentStatus.Broken:
          newStatus = EquipmentStatus.NotAvailable;
          break;
        case EquipmentStatus.NotAvailable:
          newStatus = EquipmentStatus.Available;
          break;
      }
      equipment.status = newStatus;
      return state;
    },
  },
});

export default equipmentSlice;
