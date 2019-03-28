import React, { ChangeEvent, Component, FormEvent } from "react";
import Room from "../../../models/Room";
import Button from "../../UI/Button/Button";
import EquipmentAdmin from "../EquipmentAdmin/EquipmentAdmin";
import { Equipment } from "../../../models/Equipment";
import { updateObject, checkValidity } from "../../../shared/utility";
import Input from "../../UI/Input/Input";
import "./AdminPanel.scss";
import SignInButton from "../../Google/SignInButton";
import GoogleApi from "../../../providers/googleApi";

interface IAdminPanelProps {
  onSettingsSaved: (settings: any) => void;
  onEquipmentToggleClick: ({ }) => void;
  onSettingsClear: () => void;
  onCancel: () => void;
}

interface IAdminPanelState {
  formIsValid: Boolean;
  formData: any;
}

class AdminPanel extends Component<IAdminPanelProps, IAdminPanelState> {
  state: IAdminPanelState = {
    formData: {
      roomName: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Conference room 1',
        },
        label: "Room name",
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      clientID: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Client ID from google calendar API',
        },
        label: "Client ID",
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      apiKey: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'API key from google calendar API'
        },
        label: "API key",
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false
      },
      calendarID: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Calendar ID can be found in google calendar settings'
        },
        label: "Calendar ID",
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
    },
    formIsValid: false
  };

  private selectedRoom: Room;
  private roomEquipment: Equipment[];
  private syncSettings: any;
  private googleApi: any;

  constructor(props: any) {
    super(props)

    this.selectedRoom = { ...props.selectedRoom };
    this.roomEquipment = { ...props.roomEquipment };
    this.syncSettings = { ...props.syncSettings };

    if (!this.selectedRoom) {
      this.selectedRoom = { ... new Room("Conference Room 1") };
    }

    this.state.formData.roomName.value = this.selectedRoom.name;
    this.state.formData.clientID.value = this.syncSettings.clientID;
    this.state.formData.apiKey.value = this.syncSettings.apiKey;
    this.state.formData.calendarID.value = this.syncSettings.calendarID;

    this.googleApi = new GoogleApi(this.selectedRoom.id, this.syncSettings.apiKey, this.syncSettings.clientID, this.syncSettings.calendarID);
  }

  submitSettings = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData: any = {};
    for (let formElementIdentifier in this.state.formData) {
      formData[formElementIdentifier] = this.state.formData[formElementIdentifier].value;
    }

    this.selectedRoom.name = formData.roomName;
    const newSettings = {
      syncSettings: {
        clientID: formData.clientID,
        apiKey: formData.apiKey,
        calendarID: formData.calendarID,
      },
      room: this.selectedRoom,
    }

    console.log("[AdminPanel] selectedroom:", this.selectedRoom);
    console.log("[AdminPanel] settings: ", newSettings);

    this.props.onSettingsSaved(newSettings);
  }

  inputChangedHandler = (event: ChangeEvent<HTMLInputElement>, inputIdentifier: any) => {
    const updatedFormElement = updateObject(this.state.formData[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(event.target.value, this.state.formData[inputIdentifier].validation),
      touched: true
    });
    const updatedFormData = updateObject(this.state.formData, {
      [inputIdentifier]: updatedFormElement
    });

    let formIsValid = true;
    for (let inputIdentifier in updatedFormData) {
      formIsValid = updatedFormData[inputIdentifier].valid && formIsValid;
    }

    this.setSyncSettings(updatedFormData);
    this.googleApi.changeConfig(updatedFormData.room.id, this.syncSettings.apiKey, this.syncSettings.clientID, this.syncSettings.calendarID);
    this.setState({ formData: updatedFormData, formIsValid: formIsValid });
  }

  setSyncSettings(data: any) {
    this.syncSettings = {
      clientID: data.clientID,
      apiKey: data.apiKey,
      calendarID: data.calendarID,
    }
  }

  clearSettings() {
    this.props.onSettingsClear();
  }

  cancel() {
    this.props.onCancel();
  }

  render() {
    const formElementsArray = [];
    for (let key in this.state.formData) {
      formElementsArray.push({
        id: key,
        config: this.state.formData[key]
      });
    }
    let form = (
      <form onSubmit={this.submitSettings}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            label={formElement.config.label}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            shouldValidate={formElement.config.validation}
            touched={formElement.config.touched}
            changed={(event: any) => this.inputChangedHandler(event, formElement.id)} />
        ))}
        <div>
          <EquipmentAdmin roomId={this.selectedRoom.id} equipment={this.roomEquipment} onEquipmentToggleClick={this.props.onEquipmentToggleClick} />
        </div>
        <SignInButton roomId={this.selectedRoom.id} googleApi={this.googleApi} />
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
          <Button
            // type="icon-text"
            btnType="submit"
            iconId="icon-save"
            label="Save Settings"
          />
        </div>

        {/* <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button> */}
      </form>

    );
    // if (this.props.loading) {
    //   form = <Spinner />;
    // }
    return (
      <div className="AdminPanel">
        <h3>Admin Panel</h3>
        {form}
        {/* // [TODO] all buttons are submit buttons */}

      </div>
    );
  }
}

export default AdminPanel;
