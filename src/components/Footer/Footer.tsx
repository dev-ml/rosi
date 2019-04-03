import React from "react";
import { RoomStatus } from "../../models/RoomStatus";
import RoomStatusBorder from "../Room/RoomStatusBorder/RoomStatusBorder";
import "./Footer.scss";
import SyncStatusBar from "./SyncStatusBar/SyncStatusBar";
import Button from "../UI/Button/Button";

interface IProps {
  roomStatus: RoomStatus;
  syncInformation: any;
  onAdminClick: () => void;
}

export const Footer: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="Footer">
      <RoomStatusBorder roomStatus={props.roomStatus}>
        <div className="FooterContent">
          <SyncStatusBar syncInformation={props.syncInformation}/>
          <Button
            style="icon-text"
            btnClassName="btn_dark"
            onClick={props.onAdminClick}
            iconId="icon-settings"
            label="Admin"
          />
        </div>
      </RoomStatusBorder>
    </div>
  );
};

export default Footer;
