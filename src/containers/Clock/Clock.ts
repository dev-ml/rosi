import { Dispatch } from "react";
import { connect } from "react-redux";
import { Action } from "redux";
import ClockView from "../../components/Clock/ClockView/ClockView";
import * as selectors from "../../store/selectors";
import { getDate } from "../../store/UI/UISelectors";

// [TODO] state is any
const mapStateToProps = (state: any) => {
  const time = getDate(state);
  const allocations = selectors.getRoomClockAllocations(state);

  return {
    time,
    allocations,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
  };
};

const Clock = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClockView);

export default Clock;
