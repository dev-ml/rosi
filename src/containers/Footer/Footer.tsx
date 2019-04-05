import { Dispatch } from "react";
import { connect } from "react-redux";
import { Action } from "redux";
import FooterView from "../../components/Footer/FooterView/FooterView";
import { defaultConfirmationThreshold } from "../../shared/consts";
import * as selectors from "../../store/selectors";
import uiSlice from "../../store/UI/UISlice";

// [TODO] state is any
const mapStateToProps = (state: any) => {
  const roomStatus = selectors.getSelectedRoomStatus(defaultConfirmationThreshold)(state);
  const syncInformation = state.syncProvider;

  return {
    roomStatus,
    syncInformation,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onAdminClick: () => {
      dispatch(uiSlice.actions.showAdminPanel());
    },
  };
};

const Footer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FooterView);

export default Footer;
