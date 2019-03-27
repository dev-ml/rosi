import React, { ChangeEvent, Component, FormEvent } from "react";
import Room from "../../../models/Room";
import Button from "../../UI/Button/Button";
import EquipmentAdmin from "../../Equipment/EquipmentAdmin/EquipmentAdmin";
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
}

interface IAdminPanelState {
  // room: Room;
  formIsValid: Boolean;
  orderForm: any;
}

class AdminPanel extends Component<IAdminPanelProps, IAdminPanelState> {
  state: IAdminPanelState = {
    // room: new Room(""),
    orderForm: {
      roomName: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Room name'
        },
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
          placeholder: 'Client ID'
        },
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
          placeholder: 'API key'
        },
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
          placeholder: 'Calendar ID'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
    },
    formIsValid: false
  }

  private selectedRoom: Room;
  private roomEquipment: Equipment[];
  private syncSettings: any;
  private googleApi: any;

  constructor(props: any) {
    super(props)

    
    
    this.selectedRoom = {...props.selectedRoom};
    this.roomEquipment = {...props.roomEquipment};
    this.syncSettings = {...props.syncSettings};
    
    if (!this.selectedRoom) {
      this.selectedRoom = { ... new Room("Conference Room 1") };
    }
    
    // [TODO] set props to state;
    this.state.orderForm.roomName.value = this.selectedRoom.name;
    this.state.orderForm.clientID.value = this.syncSettings.clientID;
    this.state.orderForm.apiKey.value = this.syncSettings.apiKey;
    this.state.orderForm.calendarID.value = this.syncSettings.calendarID;
    
    this.googleApi = new GoogleApi(this.selectedRoom.id, this.syncSettings.apiKey, this.syncSettings.clientID, this.syncSettings.calendarID);
    // this.setState({
    //   room: { ... this.selectedRoom },
    // });
  }



  submitSettings = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData: any = {};
    for (let formElementIdentifier in this.state.orderForm) {
      formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
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
    this.googleApi.changeConfig(newSettings.room.id, newSettings.syncSettings.apiKey, newSettings.syncSettings.clientID, newSettings.syncSettings.calendarID);
    // this.props.onOrderBurger(order, this.props.token);
  }

  inputChangedHandler = (event: ChangeEvent<HTMLInputElement>, inputIdentifier: any) => {

    const updatedFormElement = updateObject(this.state.orderForm[inputIdentifier], {
      value: event.target.value,
      valid: checkValidity(event.target.value, this.state.orderForm[inputIdentifier].validation),
      touched: true
    });
    const updatedFormData = updateObject(this.state.orderForm, {
      [inputIdentifier]: updatedFormElement
    });

    let formIsValid = true;
    for (let inputIdentifier in updatedFormData) {
      formIsValid = updatedFormData[inputIdentifier].valid && formIsValid;
    }

    this.setSyncSettings(updatedFormData);
    this.setState({ orderForm: updatedFormData, formIsValid: formIsValid });
  }

  setSyncSettings(data: any) {
    this.syncSettings = {
      clientID: data.clientID,
      apiKey: data.apiKey,
      calendarID: data.calendarID,
    }
  }

  // submitSettings(event: FormEvent<HTMLFormElement>) {
  //   event.preventDefault();

  // };

  clearSettings() {
    this.props.onSettingsClear();
  }

  // inputChangedHandler(event: ChangeEvent<HTMLInputElement>) {
  //   console.log(event);
  //   const newState = { ...this.state };
  //   if (newState.room) {
  //     newState.room.name = event.target.value;
  //   }
  //   this.setState(newState);
  // }

  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    let form = (
      <form onSubmit={this.submitSettings}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
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
        <Button
          type="icon-text"
          iconId="icon-save"
          label="Save Settings"
        />

        {/* <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button> */}
      </form>

    );
    // if (this.props.loading) {
    //   form = <Spinner />;
    // }
    return (
      <div className="ContactData">
        <h4>Enter your Contact Data</h4>
        {form}
        {/* // [TODO] all buttons are submit buttons */}
        <Button
          type="text"
          label="Clear Settings"
          onClick={() => this.clearSettings()}
        />
      </div>
    );
  }


  // render2() {
  //   return (
  //     <div>
  //       <h3>This is admin panel</h3>
  //       <form onSubmit={(e) => this.submitSettings(e)}>
  //         <span>General</span>
  //         <div>
  //           <label>Room name</label>
  //           <input
  //             type="text"
  //             placeholder="Room Name"
  //             value={this.state.room.name}
  //             onChange={(e) => this.inputChangedHandler(e)}
  //           />
  //         </div>
  //         <div>
  //           <label>API key</label>
  //           <input
  //             type="text"
  //             placeholder="Room Name"
  //             value={this.state.room.name}
  //             onChange={(e) => this.inputChangedHandler(e)}
  //           />
  //         </div>
  //         <div>
  //           <label>Client ID</label>
  //           <input
  //             type="text"
  //             placeholder="Client ID"
  //             value={this.state.room.name}
  //             onChange={(e) => this.inputChangedHandler(e)}
  //           />
  //         </div>
  //         <div>
  //           <label>Calendar ID</label>
  //           <input
  //             type="text"
  //             placeholder="Room Name"
  //             value={this.state.room.name}
  //             onChange={(e) => this.inputChangedHandler(e)}
  //           />
  //         </div>
  //         <div>
  //           <EquipmentAdmin roomId={this.state.room.id} equipment={this.roomEquipment} onEquipmentToggleClick={this.props.onEquipmentToggleClick} />
  //         </div>

  //         <Button
  //           type="icon-text"
  //           iconId="icon-save"
  //           label="Save Settings"
  //         />


  //       </form>

  //     </div>
  //   );
  // }
}

export default AdminPanel;
