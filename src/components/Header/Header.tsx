import React from "react";
import EquipmentBar from "./EquipmentBar/EquipmentBar";
import "./Header.scss";

const Header = (props: any) => {
  return (
    <div className="Header">
      <div><h1>{props.room.name}</h1></div>
      <div>{new Date().toLocaleDateString()}</div>
      <EquipmentBar equipment={props.equipment} onChangeStatusClick={props.onChangeStatusClick}/>
    </div>
  );
};

export default Header;
