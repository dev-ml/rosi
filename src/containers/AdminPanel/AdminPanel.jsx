import React, { Component, FormEvent, ChangeEvent } from "react";
import { connect } from "react-redux";
import * as selectors from "../../store/selectors";
import roomSlice from "../../store/Room/RoomSlice";
import Room from "../../models/Room";
import Button from "../../components/UI/Button/Button";
import {saveState} from "../../store/crossSliceReducer";
import uiSlice from "../../store/UI/UISlice";

interface IAdminPanelProps {
  onSettingsSaved: (room: Room) => void;
}

interface IAdminPanelState {
  room: Room;
}

class AdminPanel extends Component<IAdminPanelProps, IAdminPanelState> {
  private selectedRoom: Room;

  constructor(props: any) {
    super(props)
    console.log("!!props", props);
    this.selectedRoom = props.selectedRoom;

    if (!this.selectedRoom) {
      this.selectedRoom = {... new Room("Conference Room 1")};
    }

    this.state = {
      room: {... this.selectedRoom},
    };
}

  submitSettings(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(event);

    this.props.onSettingsSaved(this.state.room);
  };

  inputChangedHandler(event: ChangeEvent<HTMLInputElement>) {
    console.log(event);
    const newState = {...this.state};
    newState.room.name = event.target.value;
    this.setState(newState);
  }

  render() {
    return (
      <div>
        <h3>This is admin panel</h3>
        <form onSubmit={(e) => this.submitSettings(e)}>
          <div>
            <label>Room name</label>
            <input
              type="text"
              placeholder="Room Name" 
              value={this.state.room.name}
              onChange={(e) => this.inputChangedHandler(e)}
            />
          </div>
          <Button
            type="icon-text"
            iconId="icon-save"
            label="Save Settings"
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const selectedRoom = selectors.getSelectedRoom(state);

  return {
    selectedRoom,
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSettingsSaved: (room: Room) => {
      dispatch(roomSlice.actions.changeRoomName(room));
      // [TODO] temporary solution, need to be changed when multiple room management will be added
      dispatch(uiSlice.actions.setSelectedRoomId(room.id));
      dispatch(saveState());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminPanel);
