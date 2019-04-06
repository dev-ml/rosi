import { Dispatch } from "react";
import { connect } from "react-redux";
import { Action } from "redux";
import RoomView from "../../components/Room/RoomView/RoomView";
import * as selectors from "../../store/selectors";
import { getAdminPanelOpen } from "../../store/UI/UISelectors";
import uiSlice from "../../store/UI/UISlice";

// [TODO] state is any
const mapStateToProps = (state: any) => {
  const adminPanelOpen = getAdminPanelOpen(state);
  const room = selectors.getSelectedRoom(state);

  return {
    room,
    adminPanelOpen,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onPopupCloseClick: () => {
      dispatch(uiSlice.actions.hideAdminPanel());
    },
  };
};

const Room = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RoomView);

export default Room;
