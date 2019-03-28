import React from "react";
import "./Footer.scss";
import RoomStatusBorder from "../Room/RoomStatusBorder/RoomStatusBorder";
import StatusBar from "./StatusBar/StatusBar";

const Footer = (props: any) => {
  return (
    <div className="Footer">
      <RoomStatusBorder roomStatus={props.roomStatus}>
        <StatusBar room={props.room} onAdminClicked={props.onAdminClick}/>
      </RoomStatusBorder>
    </div>
  )
};

export default Footer;
