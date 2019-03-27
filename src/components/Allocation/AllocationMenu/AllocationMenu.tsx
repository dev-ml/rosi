import React from "react";
import { RoomStatus } from "../../../models/RoomStatus";
import "./AllocationMenu.scss";
import Button from "../../UI/Button/Button";

const allocationMenu = (props: any) => {
  // console.log("Allocation menu:", props.id);
  // console.log("Props: ", props);
  let meetingButtons;

  if (props.currentAllocation) {
    let confirmCurrentAllocationTag;

    if (props.roomStatus === RoomStatus.awaiting) {
      confirmCurrentAllocationTag = (
        <Button
          type="icon-text"
          onClick={() => props.onConfirmMeetingClick(props.currentAllocation.id)}
          iconId="icon-calendar-check-o"
          label="Confirm"
        />
      );
    }

    meetingButtons = (
      <>
        <Button
          type="icon-text"
          onClick={() => props.onExtendMeetingClick(props.currentAllocation.id, props.time, 60000 * 15)}
          iconId="icon-calendar-plus-o"
          label="Extend"
        />
        <Button
          type="icon-text"
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
          type="icon-text"
          onClick={() => props.onConfirmMeetingClick(props.nextAllocation.id)}
          iconId="icon-calendar-check-o"
          label="Confirm"
        />
      );
    }

    meetingButtons = (
      <>
        <Button
          type="icon-text"
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

export default allocationMenu;
