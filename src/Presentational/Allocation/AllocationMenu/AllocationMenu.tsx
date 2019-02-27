import React from "react";
import "./AllocationMenu.scss";
import { RoomStatus } from '../../../Models/Room';

const allocationMenu = (props: any) => {
  console.log('Allocation menu:', props.id);
  let meetingButtons;

  if (props.currentAllocation) {
    let confirmCurrentAllocationTag;

    if (props.roomStatus === RoomStatus.awaiting) {
      confirmCurrentAllocationTag = (
        <button className="btn btn_flat" onClick={() => props.onConfirmMeetingClick(props.currentAllocation.id)}>
          <svg className="icon">
            <use xlinkHref="symbol-defs.svg#icon-calendar-check-o"></use>
          </svg>
          <span>Confirm</span>
        </button>
      );
    }

    meetingButtons = (
      <>
        <button className="btn btn_flat" onClick={() => props.onExtendMeetingClick(props.currentAllocation.id, 60000)}>
          <svg className="icon">
            <use xlinkHref="symbol-defs.svg#icon-calendar-plus-o"></use>
          </svg>
          <span>Extend</span>
        </button>
        <button className="btn btn_flat" onClick={() => props.onFinishEarlyClick(props.currentAllocation.id)}>
          <svg className="icon">
            <use xlinkHref="symbol-defs.svg#icon-calendar-times-o"></use>
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
            <use xlinkHref="symbol-defs.svg#icon-calendar-check-o"></use>
          </svg>
          <span>Confirm</span>
        </button>
      );
    }

    meetingButtons = (
      <>
        <button className="btn btn_flat" onClick={() => props.onAddMeetingClick()}>
          <svg className="icon">
            <use xlinkHref="symbol-defs.svg#icon-calendar-o"></use>
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




      // {/* [TODO] Cancel meeting if exists */}
      // <button onClick={() => props.onAddMeetingClick()}>Add Meeting</button>
      // {/* [TODO] Only visible if current meeting exists */}
      // {props.id ? <button onClick={() => props.onExtendMeetingClick(props.id, 60000)}>Extend Meeting</button> : null}
      // {/* [TODO] Only visible if current meeting is active */}
      // {props.id ? <button onClick={() => props.onFinishEarlyClick(props.id)}>Finish early</button> : null}