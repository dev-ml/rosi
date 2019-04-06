import { Dispatch } from "react";
import { connect } from "react-redux";
import { Action } from "redux";
import HeaderView from "../../components/Header/HeaderView/HeaderView";
import { Equipment } from "../../models/Equipment";
import { defaultConfirmationThreshold } from "../../shared/consts";
import equipmentSlice from "../../store/Equipment/EquipmentSlice";
import * as selectors from "../../store/selectors";

// [TODO] state is any
const mapStateToProps = (state: any) => {
  const room = selectors.getSelectedRoom(state);
  const equipment = selectors.getSelectedRoomEquipment(state);
  const roomStatus = selectors.getSelectedRoomStatus(defaultConfirmationThreshold)(state);

  return {
    room,
    roomStatus,
    equipment,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
  return {
    onChangeStatusClick: (e: Equipment) => {
      dispatch(equipmentSlice.actions.changeStatus(e));
      console.log("TODO change status. Ids need to be added to equipment");
    },
  };
};

const Header = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderView);

export default Header;
