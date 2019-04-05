import { Dispatch } from "react";
import { connect } from "react-redux";
import { Action } from "redux";
import AllocationsView from "../../components/Allocations/AllocationsView/AllocationsView";
import Allocation from "../../models/Allocation";
import { defaultConfirmationThreshold, defaultMeetingDuration } from "../../shared/consts";
import allocationSlice from "../../store/Allocation/AllocationSlice";
import * as selectors from "../../store/selectors";
import { getDate } from "../../store/UI/UISelectors";

// [TODO] state is any
const mapStateToProps = (state: any) => {
  const time = getDate(state);
  const room = selectors.getSelectedRoom(state);

  const roomStatus = selectors.getSelectedRoomStatus(defaultConfirmationThreshold)(state);

  // [TODO] If there are more then two allocations it should be marked in allocationinfobig
  const currentAllocation = selectors.getSelectedRoomCurrentAllocation(state);
  const nextAllocation = selectors.getSelectedRoomNextAllocation(state);

  return {
    room,
    time,
    roomStatus,
    currentAllocation,
    nextAllocation,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onAddMeetingClick: (roomId: string, time: number) => {
      dispatch(allocationSlice.actions.addAllocation({
        ...new Allocation("Ad hoc meeting", roomId, time, time + defaultMeetingDuration), confirmed: true}));
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

const Allocations = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AllocationsView);

export default Allocations;
