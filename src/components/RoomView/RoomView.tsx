import React from "react";
import AllocationInfo from "../Allocation/AllocationInfo/AllocationInfo";
import AllocationInfoBig from "../Allocation/AllocationInfoBig/AllocationInfoBig";
import AllocationMenu from "../Allocation/AllocationMenu/AllocationMenu";
import RoomStatusBorder from "../RoomStatusBorder/RoomStatusBorder";
import StatusBar from "../StatusBar/StatusBar";
import TimeView from "../TimeView/TimeView";
import "./RoomView.scss";

const roomView = (props: any) => {
  console.log("roomView: ", props);
  let currentAllocationTag;
  let nextAllocationTag;

  if (props.currentAllocation) {
    currentAllocationTag =
    <AllocationInfoBig
      {...props.currentAllocation}
    />;
  }

  if (props.nextAllocation) {
    nextAllocationTag = <AllocationInfo {...props.nextAllocation}/>;
  }

  return (
    <div className="RoomView">
      <StatusBar  time={props.time} {...props}/>
      <RoomStatusBorder roomStatus={props.roomStatus}>
        <TimeView time={props.time} />
        <div className="Separator"/>
        <div className="RightSection">
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
    </div>
  );
};

export default roomView;
