import { connect } from "react-redux";
import RoomView from "../../components/Room/RoomView/RoomView";
import Allocation from "../../models/Allocation";
import { Equipment } from "../../models/Equipment";
import { defaultConfirmationThreshold, defaultMeetingDuration } from "../../shared/consts";
import allocationSlice from "../../store/Allocation/AllocationSlice";
import equipmentSlice from "../../store/Equipment/EquipmentSlice";
import * as selectors from "../../store/selectors";
import { getAdminPanelOpen, getDate } from "../../store/UI/UISelectors";
import uiSlice from "../../store/UI/UISlice";
import { Dispatch } from "react";
import { Action } from "redux";

// [TODO] state is any
const mapStateToProps = (state: any) => {
  const time = getDate(state);
  const adminPanelOpen = getAdminPanelOpen(state);
  const room = selectors.getSelectedRoom(state);
  const equipment = selectors.getSelectedRoomEquipment(state);

  const roomStatus = selectors.getSelectedRoomStatus(defaultConfirmationThreshold)(state);

  // [TODO] If there are more then two allocations it should be marked in allocationinfobig
  const currentAllocation = selectors.getSelectedRoomCurrentAllocation(state);
  const nextAllocation = selectors.getSelectedRoomNextAllocation(state);

  // get allocations for clock
  const clockAllocations = selectors.getRoomClockAllocations(state);

  const syncInformation = state.syncProvider;

  return {
    currentAllocation,
    equipment,
    nextAllocation,
    room,
    roomStatus,
    time,
    adminPanelOpen,
    clockAllocations,
    syncInformation,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onAdminClick: () => {
      dispatch(uiSlice.actions.showAdminPanel());
    },
    onPopupCloseClick: () => {
      dispatch(uiSlice.actions.hideAdminPanel());
    },
    onAddMeetingClick: (roomId: string, time: number) => {
      dispatch(allocationSlice.actions.addAllocation({
        ...new Allocation("Ad hoc meeting", roomId, time, time + defaultMeetingDuration), confirmed: true}));
    },
    onChangeStatusClick: (e: Equipment) => {
      dispatch(equipmentSlice.actions.changeStatus(e));
      console.log("TODO change status. Ids need to be added to equipment");
    },
    onConfirmMeetingClick: (id: string, time: number) => {
      dispatch(allocationSlice.actions.confirmMeeting({id, time}));
    },
    onExtendMeetingClick: (id: string, time: number, amount: number) => {
      dispatch(allocationSlice.actions.extendMeeting({id, time, amount}));
    },
    onFinishEarlyClick: (id: string, time: number) => {
      dispatch(allocationSlice.actions.finishEarly({id, time}));
    },
  };
};

const SelectedRoom = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RoomView);

export default SelectedRoom;
