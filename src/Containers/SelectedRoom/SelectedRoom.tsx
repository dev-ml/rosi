import { connect } from "react-redux";
import RoomView from "../../components/RoomView/RoomView";
import Allocation from "../../models/Allocation";
import { Equipment } from "../../models/Equipment";
import allocationSlice from "../../store/Allocation/AllocationSlice";
import equipmentSlice from "../../store/Equipment/EquipmentSlice";
import * as selectors from "../../store/selectors";
import { getDate } from "../../store/UI/UISelectors";

const mapStateToProps = (state: any, ownProps: any) => {
  console.log("mapState: ", state);
  const time = getDate(state);
  const room = selectors.getSelectedRoom(state);
  const equipment = selectors.getSelectedRoomEquipment(state);

  // 2 min
  const roomStatus = selectors.getSelectedRoomStatus(120000)(state);

  // [TODO] If there are more then two allocations it should be marked in allocationinfobig
  const currentAllocation = selectors.getSelectedRoomCurrentAllocations(state)[0];
  const nextAllocation = selectors.getSelectedRoomNextAllocation(state);

  return {
    currentAllocation,
    equipment,
    nextAllocation,
    room,
    roomStatus,
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
    onChangeStatusClick: (e: Equipment) => {
      dispatch(equipmentSlice.actions.changeStatus(e));
      console.log("TODO change status. Ids need to be added to equipment");
    },
    onConfirmMeetingClick: (id: string) => {
      dispatch(allocationSlice.actions.confirmMeeting({id}));
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
