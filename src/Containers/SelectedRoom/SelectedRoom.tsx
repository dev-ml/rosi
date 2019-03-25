import { connect } from "react-redux";
import RoomView from "../../components/Room/RoomView/RoomView";
import Allocation from "../../models/Allocation";
import { Equipment } from "../../models/Equipment";
import allocationSlice from "../../store/Allocation/AllocationSlice";
import equipmentSlice from "../../store/Equipment/EquipmentSlice";
import * as selectors from "../../store/selectors";
import { getDate, getAdminPanelOpen } from "../../store/UI/UISelectors";
import uiSlice from "../../store/UI/UISlice";

const mapStateToProps = (state: any, ownProps: any) => {
  // console.log("mapState: ", state);
  const time = getDate(state);
  const adminPanelOpen = getAdminPanelOpen(state);
  const room = selectors.getSelectedRoom(state);
  const equipment = selectors.getSelectedRoomEquipment(state);
  // console.log("equipment: ", equipment);

  // 2 min
  const roomStatus = selectors.getSelectedRoomStatus(120000)(state);

  // [TODO] If there are more then two allocations it should be marked in allocationinfobig
  const currentAllocation = selectors.getSelectedRoomCurrentAllocation(state);
  const nextAllocation = selectors.getSelectedRoomNextAllocation(state);

  // get allocations for next 10 hours
  const clockMaxTime = 10 * 60;
  const clockAllocations = selectors.getSelectedRoomFutureAllocationsForNextNMinutes(clockMaxTime)(state);

  return {
    currentAllocation,
    equipment,
    nextAllocation,
    room,
    roomStatus,
    time,
    adminPanelOpen,
    clockAllocations,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAdminClick: () => {
      dispatch(uiSlice.actions.showAdminPanel());
    },
    onPopupCloseClick: () => {
      dispatch(uiSlice.actions.hideAdminPanel());
    },
    onAddMeetingClick: (roomId: string) => {
      dispatch(allocationSlice.actions.addAllocation({
        ...new Allocation("Ad hoc meeting", roomId, Date.now() - 60000, Date.now() + 50000), confirmed: true}));
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
