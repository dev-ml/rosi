import React from "react";

import AllocationInfo from "../Allocation/AllocationInfo/AllocationInfo";
import AllocationInfoBig from "../Allocation/AllocationInfoBig/AllocationInfoBig";
import TimeView from "../TimeView/TimeView";
import AllocationMenu from "../Allocation/AllocationMenu/AllocationMenu";
import RoomClock from "../RoomClock/RoomClock";
import RoomStatusBorder from "../RoomStatusBorder/RoomStatusBorder";
import StatusBar from "../StatusBar/StatusBar";
import "./RoomView.scss";
import SignInButton from '../../Google/SignInButton';

const roomView = (props: any) => {
  console.log("roomView: ", props);
  let currentAllocationTag;
  let currentAllocationId;
  let nextAllocationTag;

  if (props.currentAllocation) {
    currentAllocationId = props.currentAllocation.id;

    currentAllocationTag =
    <AllocationInfoBig
      {...props.currentAllocation}
      // onFinishEarlyClick={props.onFinishEarlyClick}
      // onExtendMeetingClick={props.onExtendMeetingClick}
      // onAddMeetingClick={props.onAddMeetingClick}
    />;
  }

  if (props.nextAllocation) {
    nextAllocationTag = <AllocationInfo {...props.nextAllocation}/>;
  }

  return (
    <div className="RoomView">
      <StatusBar  time={props.time} {...props}/>
      <RoomStatusBorder roomStatus={props.roomStatus}>
        {/* <Header name={props.room.name}/> */}
        <TimeView time={props.time} />
        <div className="Separator"></div>
        <div className="RightSection">
          {/* <RoomClock/> */}
          {currentAllocationTag}
          {nextAllocationTag}
          <AllocationMenu
            currentAllocation={props.currentAllocation}
            nextAllocation={props.nextAllocation}
            roomStatus={props.roomStatus}
            onFinishEarlyClick={props.onFinishEarlyClick}
            onExtendMeetingClick={props.onExtendMeetingClick}
            onConfirmMeetingClick={props.onConfirmMeetingClick}
            onAddMeetingClick={props.onAddMeetingClick}
            />
        </div>
      </RoomStatusBorder>
      <SignInButton/>
    </div>
  );
};

export default roomView;
