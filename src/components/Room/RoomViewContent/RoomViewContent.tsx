import React from "react";
import AllocationsView from "../../Allocation/AllocationsView/AllocationsView";
import TimeView from "../TimeView/TimeView";
import "./RoomViewContent.scss";

const RoomViewContent = (props: any) => {
  return (
    <div className="RoomViewContent">
      <TimeView time={props.time} allocations={props.clockAllocations} />
      <div className="RoomViewContentSeparator" />
      <AllocationsView {...props} />
    </div>
  );
};

export default RoomViewContent;
