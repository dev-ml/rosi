import React from "react";
import AllocationsView from "../../Allocation/AllocationsView/AllocationsView";
import RoomClock from "../RoomClock/RoomClock";
import "./RoomViewContent.scss";
import Allocation from "../../../models/Allocation";
import Room from "../../../models/Room";
import { RoomStatus } from "../../../models/RoomStatus";

interface IProps {
  clockAllocations: Allocation[];
  room: Room;
  time: number;
  roomStatus: RoomStatus;
  currentAllocation: Allocation;
  nextAllocation: Allocation;
  onAddMeetingClick: (id: string, time: number) => void;
  onConfirmMeetingClick: (id: string, time: number) => void;
  onExtendMeetingClick: (id: string, time: number, duration: number) => void;
  onFinishEarlyClick: (id: string, time: number) => void;
}

export const RoomViewContent: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="RoomViewContent">
      <RoomClock time={props.time} allocations={props.clockAllocations} />
      <div className="RoomViewContentSeparator" />
      <AllocationsView {...props} />
    </div>
  );
};

export default RoomViewContent;
