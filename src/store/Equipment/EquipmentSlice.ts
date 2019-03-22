import { createSlice } from "redux-starter-kit";
import { Equipment } from "../../models/Equipment";
import { EquipmentStatus } from "../../models/EquipmentStatus";

// EQUIPMENT ////////////////////////
const equipmentSlice = createSlice({
  slice: "equipment",
  initialState: {
    entity: {} as {[id: string]: Equipment },
  },
  reducers: {
    addEquipment: (state, action) => {
      state.entity[action.payload.id] = action.payload;
    },
    deleteEquipment: (state, action) => {
      delete state.entity[action.payload.id];
    },
    toggleEquipment: (state, action) => {
      console.log('toggle equipment: ', action);
      const roomId = action.payload.roomId;
      const type = action.payload.type;
      const equipmentFound = Object.values(state.entity).filter((eq: Equipment) => eq.roomId === roomId && eq.type === type)[0];
      if (equipmentFound) {
        delete state.entity[equipmentFound.id];
      } else {
        const newEquipment = new Equipment(roomId, type, EquipmentStatus.Available);
        state.entity[newEquipment.id] = {...newEquipment};
      }
    },
    setStatus: (state, action) => {
      state.entity[action.payload.id].status = action.payload.status;
      return state;
    },
    changeStatus: (state, action) => {
      const equipment: Equipment = state.entity[action.payload.id];
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
