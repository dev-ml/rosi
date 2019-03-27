import React from "react";
import { EquipmentType } from "../../../models/EquipmentType";

const EquipmentAdmin = (props: any) => {
  return (
    <>
      <div>This is equipment admin</div>
      {Object.values(EquipmentType).map((type: any) => <div key={type}><button onClick={() => props.onEquipmentToggleClick(props.roomId, type)}>{type}</button></div>)}
    </>
  );
};

export default EquipmentAdmin;
