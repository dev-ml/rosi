import Allocation from "../models/Allocation";
import Room from "../models/Room";
import store from "./store";

import { Equipment } from "../models/Equipment";
import { EquipmentStatus } from "../models/EquipmentStatus";
import { EquipmentType } from "../models/EquipmentType";
import allocationSlice from "./Allocation/AllocationSlice";
import equipmentSlice from "./Equipment/EquipmentSlice";
import roomSlice from "./Room/RoomSlice";
import { getSelectedRoomAllocations, getSelectedRoomCurrentAllocations,
   getSelectedRoomEquipment, getSelectedRoomNextAllocation, isSelectedRoomOccupied } from "./selectors";
import { getSelectedRoomId } from "./UI/UISelectors";
import uiSlice from "./UI/UISlice";

///////////////////////////////////////////////////////////////
// Starting init
///////////////////////////////////////////////////////////////
const start = () => {
  console.log("hello world");
  store.subscribe(() => {
    console.log(store.getState());
  });

  store.dispatch(roomSlice.actions.addRoom({...new Room("Supernova")}));
  store.dispatch(roomSlice.actions.addRoom({...new Room("Room 2")}));

  store.dispatch(uiSlice.actions.setSelectedRoomId("Supernova"));

  // store.dispatch(allocationSlice.actions.addAllocation(
  //   {...new Allocation("Test allocation 1a", "Supernova", Date.now() - 1200000, Date.now() - 1200000)}));
  // store.dispatch(allocationSlice.actions.addAllocation(
  //   {...new Allocation("Test allocation 1b", "Supernova", Date.now() - 1200000, Date.now() - 1200000)}));
  // store.dispatch(allocationSlice.actions.addAllocation(
  //   {...new Allocation("Test allocation Current 1c", "Supernova", Date.now() - 120000 , Date.now() + 50000)}));
  // store.dispatch(allocationSlice.actions.addAllocation(
  //   {...new Allocation("Test allocation Next 1d", "Supernova", Date.now() + 110000, Date.now() + 480000)}));
  // store.dispatch(allocationSlice.actions.addAllocation(
  //   {...new Allocation("Test allocation 1e", "Supernova", Date.now() + 1000000, Date.now() + 1200000)}));

  store.dispatch(allocationSlice.actions.addAllocation(
    {...new Allocation("Test allocation 2a", "Room 2", Date.now() - 1200000, Date.now() - 1200000)}));

  store.dispatch(equipmentSlice.actions.addEquipment(
    {...new Equipment("Supernova", EquipmentType.Projector, EquipmentStatus.Available)}));
  store.dispatch(equipmentSlice.actions.addEquipment(
    {...new Equipment("Supernova", EquipmentType.Skype, EquipmentStatus.Available)}));
  store.dispatch(equipmentSlice.actions.addEquipment(
    {...new Equipment("Supernova", EquipmentType.WhiteBoard, EquipmentStatus.Available)}));

  // store.dispatch(equipmentSlice.actions.changeStatus(
  //   {...new Equipment("Supernova", EquipmentType.WhiteBoard, EquipmentStatus.Available)}));

  const roomName1 = getSelectedRoomId(store.getState());
  const roomAllocations = getSelectedRoomAllocations(store.getState());
  const roomEquipment = getSelectedRoomEquipment(store.getState());

  const roomOccupied = isSelectedRoomOccupied(store.getState());
  const currentAllocation = getSelectedRoomCurrentAllocations(store.getState())[0];
  const nextAllocation = getSelectedRoomNextAllocation(store.getState());

  // const timeInterval = selectDateTime();
  // console.log('Time: ', selectDateTime(store.getState()));
  // console.log('Occupied2: ', roomOccupied2);
  // const roomOccupied2 = isSelectedRoomOccupied2(store.getState());
  console.log("Name: ", roomName1);
  console.log("Allocations: ", roomAllocations);
  console.log("Occupied: ", roomOccupied);
  console.log("Equipment: ", roomEquipment);
  console.log("Current allocation: ", currentAllocation);
  console.log("Next allocation: ", nextAllocation);

  setInterval(() => {
    console.log("Interval");
    // console.log('Time: ', selectDateTime(store.getState()));
    store.dispatch(uiSlice.actions.setTime(Date.now()));
  }, 1000 * 60);
};

export default start;
