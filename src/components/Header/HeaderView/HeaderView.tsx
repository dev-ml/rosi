import React from "react";
import EquipmentBar from "../EquipmentBar/EquipmentBar";
import "./HeaderView.scss";
import RoomStatusBorder from "../../Room/RoomStatusBorder/RoomStatusBorder";
import { RoomStatus } from "../../../models/RoomStatus";
import Room from "../../../models/Room";
import { Equipment } from "../../../models/Equipment";

interface IProps {
  room: Room;
  roomStatus: RoomStatus;
  equipment: Equipment[];
  onChangeStatusClick: (e: Equipment) => void;
}

export const HeaderView: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="HeaderView">
      <RoomStatusBorder roomStatus={props.roomStatus}>
        <div className="HeaderViewContent">
          <div><h1>{props.room.name}</h1></div>
          <div>{new Date().toLocaleDateString()}</div>
          <EquipmentBar equipment={props.equipment} onChangeStatusClick={props.onChangeStatusClick} />
        </div>
      </RoomStatusBorder>
    </div>
  );
};

export default HeaderView;
