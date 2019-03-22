import React, { ChangeEvent, Component, FormEvent } from "react";
import Room from "../../../models/Room";
import Button from "../../UI/Button/Button";
import EquipmentAdmin from "../../Equipment/EquipmentAdmin/EquipmentAdmin";
import { Equipment } from "../../../models/Equipment";

interface IAdminPanelProps {
  onSettingsSaved: (room: Room) => void;
  onEquipmentToggleClick: ({}) => void;
  onSettingsClear: () => void;
}

interface IAdminPanelState {
  room: Room;
}

class AdminPanel extends Component<IAdminPanelProps, IAdminPanelState> {
  private selectedRoom: Room;
  private roomEquipment: Equipment[];

  constructor(props: any) {
    super(props)
    this.selectedRoom = props.selectedRoom;
    this.roomEquipment = props.roomEquipment;

    if (!this.selectedRoom) {
      this.selectedRoom = {... new Room("Conference Room 1")};
    }

    this.state = {
      room: {... this.selectedRoom},
    };
}

  submitSettings(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    this.props.onSettingsSaved(this.state.room);
  };

  clearSettings() {
    this.props.onSettingsClear();
  }

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
            <span>General</span>
            <label>Room name</label>
            <input
              type="text"
              placeholder="Room Name" 
              value={this.state.room.name}
              onChange={(e) => this.inputChangedHandler(e)}
            />
          </div>
          <div>
            <EquipmentAdmin roomId={this.state.room.id} equipment={this.roomEquipment} onEquipmentToggleClick={this.props.onEquipmentToggleClick}/>
          </div>

          <Button
            type="icon-text"
            iconId="icon-save"
            label="Save Settings"
          />

          
        </form>
        <Button
            type="text"
            label="Clear Settings"
            onClick={() => this.clearSettings()}
          />
      </div>
    );
  }
}

export default AdminPanel;
