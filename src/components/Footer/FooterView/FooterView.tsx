import React from "react";
import { RoomStatus } from "../../../models/RoomStatus";
import RoomStatusBorder from "../../Room/RoomStatusBorder/RoomStatusBorder";
import "./FooterView.scss";
import SyncStatusBar from "../SyncStatusBar/SyncStatusBar";
import Button from "../../UI/Button/Button";

interface IProps {
  roomStatus: RoomStatus;
  syncInformation: any;
  onAdminClick: () => void;
}

export const FooterView: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="FooterView">
      <RoomStatusBorder roomStatus={props.roomStatus}>
        <div className="FooterViewContent">
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

export default FooterView;
