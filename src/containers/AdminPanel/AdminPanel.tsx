import React, { Component, FormEvent, ChangeEvent } from "react";
import { connect } from "react-redux";
import * as selectors from "../../store/selectors";
import roomSlice from "../../store/Room/RoomSlice";
import Room from "../../models/Room";
import Button from "../../components/UI/Button/Button";
import {saveState} from "../../store/crossSliceReducer";

interface IAdminPanelProps {
  onSettingsSaved: (roomId: string, newName: string) => void;
}

interface IAdminPanelState {
  roomName: string;
}

class AdminPanel extends Component<IAdminPanelProps, IAdminPanelState> {
  private selectedRoom: Room;

  constructor(props: any) {
    super(props)
    console.log("!!props", props);
    this.selectedRoom = props.selectedRoom;
    this.state = {
      roomName: this.selectedRoom.name,
    };
}

  submitSettings(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(event);

    this.props.onSettingsSaved(this.selectedRoom.id, this.state.roomName);
  };

  inputChangedHandler(event: ChangeEvent<HTMLInputElement>) {
    console.log(event);
    this.setState({roomName: event.target.value});
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
              value={this.state.roomName}
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
    onSettingsSaved: (roomId: string, newName: string) => {
      dispatch(roomSlice.actions.changeRoomName({id: roomId, name: newName}));
      dispatch(saveState());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdminPanel);
