import React from "react";
import Admin from "../../../containers/Admin/Admin";
import AllocationInfo from "../../Allocation/AllocationInfo/AllocationInfo";
import AllocationInfoBig from "../../Allocation/AllocationInfoBig/AllocationInfoBig";
import AllocationMenu from "../../Allocation/AllocationMenu/AllocationMenu";
import "./AllocationsView.scss";

const AllocationsView = (props: any) => {
  // console.log("roomView: ", props);
  if (!props.room) {
    console.error("[RoomView] No room provided!");
    return <Admin />;
  }

  let currentAllocationTag;
  let nextAllocationTag;

  // [TODO] Overlapping events, if current event is overlapping next
  if (props.currentAllocation) {
    currentAllocationTag =
      <AllocationInfoBig time={props.time}
        {...props.currentAllocation}
      />;
  }

  if (props.nextAllocation) {
    nextAllocationTag = <AllocationInfo time={props.time} {...props.nextAllocation} />;
  }

  return (
    <div className="AllocationsView">
      <div className="Allocations">
        {currentAllocationTag}
        {nextAllocationTag}
      </div>
      <AllocationMenu
        roomId={props.room.id}
        time={props.time}
        currentAllocation={props.currentAllocation}
        nextAllocation={props.nextAllocation}
        roomStatus={props.roomStatus}
        onFinishEarlyClick={props.onFinishEarlyClick}
        onExtendMeetingClick={props.onExtendMeetingClick}
        onConfirmMeetingClick={props.onConfirmMeetingClick}
        onAddMeetingClick={props.onAddMeetingClick}
      />
    </div>

  );
};

export default AllocationsView;
