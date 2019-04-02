import React from "react";
import EquipmentBar from "./EquipmentBar/EquipmentBar";
import "./Header.scss";
import RoomStatusBorder from "../Room/RoomStatusBorder/RoomStatusBorder";
import { RoomStatus } from "../../models/RoomStatus";
import Room from "../../models/Room";
import { Equipment } from "../../models/Equipment";

interface IProps {
  room: Room;
  roomStatus: RoomStatus;
  equipment: Equipment[];
  onChangeStatusClick: (e: Equipment) => void;
}

export const Header: React.FC<IProps> = (props: IProps) => {
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
