import React, { ChangeEvent, Component } from "react";
import { Equipment } from "../../../models/Equipment";
import Room from "../../../models/Room";
import { checkValidity, updateObject } from "../../../shared/utility";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import EquipmentAdmin from "../EquipmentAdmin/EquipmentAdmin";
import "./AdminPanel.scss";
import { EquipmentType } from "../../../models/EquipmentType";

interface IAdminPanelProps {
  onSettingsSaved: (settings: any) => void;
  onEquipmentToggleClick: (roomId: string, type: EquipmentType) => void;
  onSettingsClear: () => void;
  onCancel: () => void;
  onConnect: () => void;
}

interface IAdminPanelState {
  formIsValid: boolean;
  formData: any;
}

class AdminPanel extends Component<IAdminPanelProps, IAdminPanelState> {
  static getDerivedStateFromProps(props: any, state: any) {
    return {
      formData: {
        ...state.formData,
        clientId: { ...state.formData.clientId, value: props.syncSettings.clientId },
        apiKey: { ...state.formData.apiKey, value: props.syncSettings.apiKey },
        calendarId: { ...state.formData.calendarId, value: props.syncSettings.calendarId },
      },
    };
  }

  state: IAdminPanelState = {
    formData: {
      roomName: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Conference room 1",
        },
        label: "Room name",
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      clientId: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Client ID from google calendar API",
        },
        label: "Client ID",
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      apiKey: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "API key from google calendar API",
        },
        label: "API key",
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      calendarId: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "Calendar ID can be found in google calendar settings",
        },
        label: "Calendar ID",
        value: "",
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
    },
    formIsValid: false,
  };

  private selectedRoom: Room;
  private roomEquipment: Equipment[];
  private syncSettings: any;

  constructor(props: any) {
    super(props);

    this.selectedRoom = { ...props.selectedRoom };
    this.roomEquipment = { ...props.roomEquipment };
    this.syncSettings = { ...props.syncSettings };

    if (!this.selectedRoom.id) {
      this.selectedRoom = { ... new Room("Conference Room 1") };
    }

    this.state.formData.roomName.value = this.selectedRoom.name;
    this.state.formData.clientId.value = this.syncSettings.clientId;
    this.state.formData.apiKey.value = this.syncSettings.apiKey;
    this.state.formData.calendarId.value = this.syncSettings.calendarId;
  }

  inputChangedHandler = (event: ChangeEvent<HTMLInputElement>, inputIdentifier: any) => {
    const updatedFormElement = updateObject(this.state.formData[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(event.target.value, this.state.formData[inputIdentifier].validation),
      touched: true,
    });
    const updatedFormData = updateObject(this.state.formData, {
      [inputIdentifier]: updatedFormElement,
    });

    let formIsValid = true;
    // tslint:disable-next-line: forin
    for (const inputId in updatedFormData) {
      formIsValid = updatedFormData[inputId].valid && formIsValid;
    }

    this.setSyncSettings(updatedFormData);
    this.setState({ formData: updatedFormData, formIsValid });

    this.selectedRoom.name = updatedFormData.roomName.value;
    const newSettings = {
      syncSettings: this.syncSettings,
      room: this.selectedRoom,
    };

    this.props.onSettingsSaved(newSettings);
  }

  setSyncSettings(data: any) {
    this.syncSettings = {
      clientId: data.clientId.value,
      apiKey: data.apiKey.value,
      calendarId: data.calendarId.value,
    };

    console.log("[AdminPanel] setSyncSettings: ", this.syncSettings);
  }

  clearSettings() {
    this.props.onSettingsClear();
  }

  cancel() {
    this.props.onCancel();
  }

  connect() {
    console.log(`[AdminPanel] connect with clientId ${this.syncSettings.clientId} apiKey: ${this.syncSettings.apiKey}`);
    this.props.onConnect();
  }

  render() {
    const formElementsArray = [];
    // tslint:disable-next-line: forin
    for (const key in this.state.formData) {
      formElementsArray.push({
        id: key,
        config: this.state.formData[key],
      });
    }
    const form = (
      <form>
        {// tslint:disable-next-line: jsx-no-multiline-js
          formElementsArray.map((formElement) => (
          <Input
            key={formElement.id}
            label={formElement.config.label}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event: any) => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <div>
          <EquipmentAdmin
            roomId={this.selectedRoom.id}
            onEquipmentToggleClick={this.props.onEquipmentToggleClick}
          />
        </div>
        <div>
          <button type="button" onClick={() => this.connect()}>Connect</button>
        </div>
        <div className="AdminPanelButtons">
          <Button
            // type="text"
            label="Clear Settings"
            onClick={() => this.clearSettings()}
          />
          <Button
            // type="text"
            label="Cancel"
            onClick={() => this.cancel()}
          />
        </div>

      </form>

    );
    return (
      <div className="AdminPanel">
        <h3>Admin Panel</h3>
        {form}
      </div>
    );
  }
}

export default AdminPanel;
