import { connect } from "react-redux";
import * as selectors from "../../store/selectors";
import roomSlice from "../../store/Room/RoomSlice";
import Room from "../../models/Room";
import {saveState, removeState} from "../../store/crossSliceReducer";
import uiSlice from "../../store/UI/UISlice";
import AdminPanel from "../../components/Admin/AdminPanel/AdminPanel";
import equipmentSlice from "../../store/Equipment/EquipmentSlice";
import { getSyncSettings } from "../../store/UI/UISelectors";

const mapStateToProps = (state: any) => {
  const selectedRoom = selectors.getSelectedRoom(state);
  const roomEquipment = selectors.getSelectedRoomEquipment(state);
  const syncSettings = getSyncSettings(state);

  return {
    selectedRoom,
    roomEquipment,
    syncSettings,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSettingsSaved: (settings: any) => {
      dispatch(roomSlice.actions.changeRoomName({...settings.room}));
      // [TODO] temporary solution, need to be changed when multiple room management will be added
      dispatch(uiSlice.actions.setSelectedRoomId(settings.room.id));
      dispatch(uiSlice.actions.setSyncSettings(settings.syncSettings));
      dispatch(saveState());
    },
    onEquipmentToggleClick: (roomId: string, type: string) => {
      console.log("onEquipmentToggleClick");
      dispatch(equipmentSlice.actions.toggleEquipment({roomId, type}));
    },
    onSettingsClear: () => {
      dispatch(removeState());
    }
  };
};

const Admin = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminPanel);

export default Admin;
