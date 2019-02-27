import React from "react";
import EquipmentBar from "../EquipmentBar/EquipmentBar";
import "./StatusBar.scss";

const StatusBar = (props: any) => {
  return (
    <div className="StatusBar">
      <div>{props.room.name}</div>
      {/* <div>{new Date(props.time).toLocaleTimeString("en-US")}</div> */}
      <EquipmentBar equipment={props.equipment} onChangeStatusClick={props.onChangeStatusClick}/>
    </div>
  );
};

export default StatusBar;
