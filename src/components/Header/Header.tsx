import React from "react";
import EquipmentBar from "../EquipmentBar/EquipmentBar";
import "./Header.scss";

const Header = (props: any) => {
  return (
    <div className="Header">
      <div>{props.room.name}</div>
      <EquipmentBar equipment={props.equipment} onChangeStatusClick={props.onChangeStatusClick}/>
    </div>
  );
};

export default Header;
