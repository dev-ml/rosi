import React from "react";
import { RoomStatus } from "../../models/RoomStatus";
import RoomStatusBorder from "../Room/RoomStatusBorder/RoomStatusBorder";
import "./Footer.scss";
import StatusBar from "./StatusBar/StatusBar";

interface IProps {
  roomStatus: RoomStatus;
  onAdminClick: () => void;
}

export const Footer: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="Footer">
      <RoomStatusBorder roomStatus={props.roomStatus}>
        <StatusBar onAdminClick={props.onAdminClick}/>
      </RoomStatusBorder>
    </div>
  );
};

export default Footer;
