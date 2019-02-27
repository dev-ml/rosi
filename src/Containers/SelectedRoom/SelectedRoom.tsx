import { connect } from "react-redux";
import Allocation from "../../Models/Allocation";
import { Equipment } from "../../Models/Equipment";
import RoomView from "../../Presentational/RoomView/RoomView";
import allocationSlice from "../../Store/Allocation/AllocationSlice";
import equipmentSlice from "../../Store/Equipment/EquipmentSlice";
import { getSelectedRoom, getSelectedRoomCurrentAllocations, getSelectedRoomEquipment,
         getSelectedRoomNextAllocation, isSelectedRoomOccupied, getSelectedRoomStatus } from "../../Store/selectors";
import { getDate } from "../../Store/UI/UISelectors";

const mapStateToProps = (state: any, ownProps: any) => {
  console.log("mapState: ", state);
  const time = getDate(state);
  const room = getSelectedRoom(state);
  const equipment = getSelectedRoomEquipment(state);

  // 2 min
  const roomStatus = getSelectedRoomStatus(120000)(state);

  // [TODO] If there are more then two allocations it should be marked in allocationinfobig
  const currentAllocation = getSelectedRoomCurrentAllocations(state)[0];
  const nextAllocation = getSelectedRoomNextAllocation(state);

  return {
    currentAllocation,
    equipment,
    nextAllocation,
    roomStatus,
    room,
    time,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAddMeetingClick: (id: string) => {
      // [TODO] roomName to id
      dispatch(allocationSlice.actions.addAllocation({
        ...new Allocation("Ad hoc meeting", "Supernova", Date.now() - 60000, Date.now() + 50000), confirmed: true}));
    },
    onConfirmMeetingClick: (id: string) => {
      dispatch(allocationSlice.actions.confirmMeeting({id}));
    },
    onChangeStatusClick: (e: Equipment) => {
      dispatch(equipmentSlice.actions.changeStatus(e));
      console.log("TODO change status. Ids need to be added to equipment");
    },
    onExtendMeetingClick: (id: string, amount: number) => {
      dispatch(allocationSlice.actions.extendMeeting({id, amount}));
    },
    onFinishEarlyClick: (id: string) => {
      dispatch(allocationSlice.actions.finishEarly(id));
    },
  };
};

const SelectedRoom = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RoomView);

export default SelectedRoom;
