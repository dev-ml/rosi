import { connect } from "react-redux";
import AdminPanel from "../../components/Admin/AdminPanel/AdminPanel";
import { removeState } from "../../store/CrossSlice/CrossSliceActions";
import equipmentSlice from "../../store/Equipment/EquipmentSlice";
import roomSlice from "../../store/Room/RoomSlice";
import * as selectors from "../../store/selectors";
import { connect as syncConnect } from "../../store/SyncProvider/SyncProviderActions";
import { getSyncSettings } from "../../store/SyncProvider/SyncProviderSelectors";
import syncProviderSlice from "../../store/SyncProvider/SyncProviderSlice";
import uiSlice from "../../store/UI/UISlice";

const mapStateToProps = (state: any) => {
  const selectedRoom = selectors.getSelectedRoom(state);
  const roomEquipment = selectors.getSelectedRoomEquipment(state);
  const syncSettings = getSyncSettings(state);
  const syncProvider = state.syncProvider;

  return {
    selectedRoom,
    roomEquipment,
    syncSettings,
    syncProvider,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSettingsSaved: (settings: any) => {
      console.log("[Admin] onSettingsSaved");
      dispatch(roomSlice.actions.changeRoomName({...settings.room}));
      // [TODO] temporary solution, need to be changed when multiple room management will be added
      dispatch(uiSlice.actions.setSelectedRoomId(settings.room.id));
      dispatch(syncProviderSlice.actions.setSyncSettings(settings.syncSettings));
      // dispatch(uiSlice.actions.hideAdminPanel());
      // dispatch(saveState());
    },
    onEquipmentToggleClick: (roomId: string, type: string) => {
      console.log("onEquipmentToggleClick");
      dispatch(equipmentSlice.actions.toggleEquipment({roomId, type}));
    },
    onSettingsClear: () => {
      dispatch(removeState());
    },
    onCancel: () => {
      dispatch(uiSlice.actions.hideAdminPanel());
    },
    onConnect: () => {
      dispatch(syncConnect());
    }
  };
};

const Admin = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminPanel);

export default Admin;
