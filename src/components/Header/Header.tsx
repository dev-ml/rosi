import React from "react";
import EquipmentBar from "./EquipmentBar/EquipmentBar";
import "./Header.scss";
import RoomStatusBorder from "../Room/RoomStatusBorder/RoomStatusBorder";

const Header = (props: any) => {
  return (
    <div className="Header">
      <RoomStatusBorder roomStatus={props.roomStatus}>
        <div className="HeaderContent">
          <div><h1>{props.room.name}</h1></div>
          <div>{new Date().toLocaleDateString()}</div>
          <EquipmentBar equipment={props.equipment} onChangeStatusClick={props.onChangeStatusClick} />
        </div>
      </RoomStatusBorder>
    </div>
  );
};

export default Header;
