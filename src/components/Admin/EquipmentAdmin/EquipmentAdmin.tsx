import React from "react";
import { EquipmentType } from "../../../models/EquipmentType";
import "./EquipmentAdmin.scss";

const EquipmentAdmin = (props: any) => {
  return (
    <div className="EquipmentAdmin">
      <label>Room Equipment</label>
      {Object.values(EquipmentType).map((type: any) => <div key={type}><button onClick={() => props.onEquipmentToggleClick(props.roomId, type)}>{type}</button></div>)}
    </div>
  );
};

export default EquipmentAdmin;
