import React from "react";
import { RoomStatus } from "../../../models/RoomStatus";
import "./AllocationMenu.scss";
import Button from "../../UI/Button/Button";
import Allocation from "../../../models/Allocation";
import { defaultExtendDuration } from "../../../shared/consts";

interface IProps {
  roomId: string;
  time: number;
  roomStatus: RoomStatus;
  currentAllocation: Allocation;
  nextAllocation: Allocation;
  onAddMeetingClick: (id: string, time: number) => void;
  onConfirmMeetingClick: (id: string, time: number) => void;
  onExtendMeetingClick: (id: string, time: number, duration: number) => void;
  onFinishEarlyClick: (id: string, time: number) => void;
}

export const AllocationMenu: React.FC<IProps> = (props: IProps) => {
  let meetingButtons;

  if (props.currentAllocation) {
    let confirmCurrentAllocationTag;

    if (props.roomStatus === RoomStatus.awaiting) {
      confirmCurrentAllocationTag = (
        <Button
          style="icon-text"
          onClick={() => props.onConfirmMeetingClick(props.currentAllocation.id, props.time)}
          iconId="icon-calendar-check-o"
          label="Confirm"
        />
      );
    }

    meetingButtons = (
      <>
        <Button
          style="icon-text"
          onClick={() => props.onExtendMeetingClick(props.currentAllocation.id, props.time, defaultExtendDuration)}
          iconId="icon-calendar-plus-o"
          label="Extend"
        />
        <Button
          style="icon-text"
          onClick={() => props.onFinishEarlyClick(props.currentAllocation.id, props.time)}
          iconId="icon-calendar-times-o"
          label="Finish"
        />
        {confirmCurrentAllocationTag}
      </>
    );
  } else {
    let confirmNextAllocationTag;

    if (props.roomStatus === RoomStatus.awaiting) {
      confirmNextAllocationTag = (
        <Button
          style="icon-text"
          onClick={() => props.onConfirmMeetingClick(props.nextAllocation.id, props.time)}
          iconId="icon-calendar-check-o"
          label="Confirm"
        />
      );
    }

    meetingButtons = (
      <>
        <Button
          style="icon-text"
          onClick={() => props.onAddMeetingClick(props.roomId, props.time)}
          iconId="icon-calendar-o"
          label="Book now"
        />
        {confirmNextAllocationTag}
      </>
    );
  }

  return (
    <div className={`AllocationMenu ${props.roomStatus}`}>
      {meetingButtons}
    </div>
  );
};

export default AllocationMenu;
