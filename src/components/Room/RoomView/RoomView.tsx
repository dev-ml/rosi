import React from "react";
import Admin from "../../../containers/Admin/Admin";
import Header from "../../Header/Header";
import RoomViewContent from "../RoomViewContent/RoomViewContent";
import "./RoomView.scss";
import Footer from "../../Footer/Footer";
import Popup from "../../UI/Popup/Popup";
import Room from "../../../models/Room";
import { RoomStatus } from "../../../models/RoomStatus";
import { Equipment } from "../../../models/Equipment";
import Allocation from "../../../models/Allocation";

interface IProps {
  time: number;
  room: Room;
  roomStatus: RoomStatus;
  equipment: Equipment[];
  adminPanelOpen: boolean;
  clockAllocations: Allocation[];
  currentAllocation: Allocation;
  nextAllocation: Allocation;
  syncInformation: any;
  onChangeStatusClick: (e: Equipment) => void;
  onAdminClick: () => void;
  onPopupCloseClick: () => void;
  onAddMeetingClick: (id: string, time: number) => void;
  onConfirmMeetingClick: (id: string, time: number) => void;
  onExtendMeetingClick: (id: string, time: number, duration: number) => void;
  onFinishEarlyClick: (id: string, time: number) => void;
}

export const RoomView: React.FC<IProps> = (props: IProps) => {
  if (!props.room) {
    console.error("[RoomView] No room provided!");
    return <span>No room provided</span>;
  }

  return (
    <div className="RoomView">
      <Header {...props} />
      <RoomViewContent {...props} />
      <Footer {...props} />
      <Popup open={props.adminPanelOpen} onCloseClick={props.onPopupCloseClick}>
        <Admin />
      </Popup>
    </div>
  );
};

export default RoomView;
