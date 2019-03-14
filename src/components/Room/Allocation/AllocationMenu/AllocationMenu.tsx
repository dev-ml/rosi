import React from "react";
import { RoomStatus } from "../../../../models/RoomStatus";
import "./AllocationMenu.scss";

const allocationMenu = (props: any) => {
  console.log("Allocation menu:", props.id);
  console.log("Props: ", props);
  let meetingButtons;

  if (props.currentAllocation) {
    let confirmCurrentAllocationTag;

    if (props.roomStatus === RoomStatus.awaiting) {
      confirmCurrentAllocationTag = (
        <button className="btn btn_flat" onClick={() => props.onConfirmMeetingClick(props.currentAllocation.id)}>
          <svg className="icon">
            <use xlinkHref="symbol-defs.svg#icon-calendar-check-o"/>
          </svg>
          <span>Confirm</span>
        </button>
      );
    }

    meetingButtons = (
      <>
        <button className="btn btn_flat" onClick={() => props.onExtendMeetingClick(props.currentAllocation.id, 60000)}>
          <svg className="icon">
            <use xlinkHref="symbol-defs.svg#icon-calendar-plus-o"/>
          </svg>
          <span>Extend</span>
        </button>
        <button className="btn btn_flat" onClick={() => props.onFinishEarlyClick(props.currentAllocation.id)}>
          <svg className="icon">
            <use xlinkHref="symbol-defs.svg#icon-calendar-times-o"/>
          </svg>
          <span>Finish</span>
        </button>
        {confirmCurrentAllocationTag}
      </>
    );
  } else {
    let confirmNextAllocationTag;

    if (props.roomStatus === RoomStatus.awaiting) {
      confirmNextAllocationTag = (
        <button className="btn btn_flat" onClick={() => props.onConfirmMeetingClick(props.nextAllocation.id)}>
          <svg className="icon">
            <use xlinkHref="symbol-defs.svg#icon-calendar-check-o"/>
          </svg>
          <span>Confirm</span>
        </button>
      );
    }

    meetingButtons = (
      <>
        <button className="btn btn_flat" onClick={() => props.onAddMeetingClick(props.roomId)}>
          <svg className="icon">
            <use xlinkHref="symbol-defs.svg#icon-calendar-o"/>
          </svg>
          <span>Book now</span>
        </button>
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
