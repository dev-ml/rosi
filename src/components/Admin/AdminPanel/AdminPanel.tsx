import React, { ChangeEvent, Component } from "react";
import { Equipment } from "../../../models/Equipment";
import Room from "../../../models/Room";
import { checkValidity, updateObject } from "../../../shared/utility";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import EquipmentAdmin from "../EquipmentAdmin/EquipmentAdmin";
import "./AdminPanel.scss";
import { EquipmentType } from "../../../models/EquipmentType";
import SyncProviderAdmin from "../SyncProviderAdmin/SyncProviderAdmin";


interface IAdminPanelProps {
  syncProvider: any;
  syncSettings: any;
  roomEquipment: Equipment[];
  selectedRoom: Room;
  onSettingsSaved: (settings: any) => void;
  onEquipmentToggleClick: (roomId: string, type: EquipmentType) => void;
  onCancel: () => void;
  onConnect: () => void;
}

interface IAdminPanelState {
  formIsValid: boolean;
  formData: any;
}

class AdminPanel extends Component<IAdminPanelProps, IAdminPanelState> {
  static getDerivedStateFromProps(props: IAdminPanelProps, state: any) {
    // selected room
    return {
      formData: {
        ...state.formData,
        roomName: { ...state.formData.roomName, value: props.selectedRoom.name },
        clientId: { ...state.formData.clientId, value: props.syncSettings.clientId },
        apiKey: { ...state.formData.apiKey, value: props.syncSettings.apiKey },
        calendarId: { ...state.formData.calendarId, value: props.syncSettings.calendarId },
      },
      selectedRoom: props.selectedRoom,
      syncSettings: props.syncSettings,
      syncProvider: props.syncProvider,
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
    // [TODO] this initialization should be removed
  };

  constructor(props: any) {
    super(props);
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

    this.setState({ formData: updatedFormData, formIsValid });

    const newSelectedRoom = { ...this.props.selectedRoom, name: updatedFormData.roomName.value};
    const newSettings = {
      syncSettings: {
        clientId: updatedFormData.clientId.value,
        apiKey: updatedFormData.apiKey.value,
        calendarId: updatedFormData.calendarId.value,
      },
      room: newSelectedRoom,
    };

    this.props.onSettingsSaved(newSettings);
  }

  cancel() {
    this.props.onCancel();
  }

  // connect() {
  //   console.log(`[AdminPanel] connect with clientId ${this.state.syncSettings.clientId} apiKey: ${this.state.syncSettings.apiKey}`);
  //   this.props.onConnect();
  // }

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
            roomId={this.props.selectedRoom.id}
            equipment={this.props.roomEquipment}
            onEquipmentToggleClick={this.props.onEquipmentToggleClick}
          />
        </div>
        <div>
          <SyncProviderAdmin
            onConnect={this.props.onConnect}
            data={this.props.syncProvider}
          />
        </div>
        <div className="AdminPanelButtons">
          <Button
            style="icon-text-large"
            btnClassName="btn_dark"
            label="Close"
            // [TODO] change icon
            iconId="icon-exit"
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
