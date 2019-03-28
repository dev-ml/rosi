import React from "react";
import { formatTimeStamp, millisecondsToMinutes } from "../../../shared/utility";
import "./AllocationInfo.scss";

const allocationInfo = (props: any) => {
  // console.log("allocationInfo: ", props);
  const startsIn = millisecondsToMinutes(props.from - props.time);

  return (
    <div className="AllocationInfo">
      <div className="text-very-small text-gray">Next Meeting</div>
      <div><h4>{props.title}</h4></div>
      <div>{formatTimeStamp(props.from)} - {formatTimeStamp(props.to)}</div>
      {/* <div>{props.by}{formatTimeStamp(props.from)} - {formatTimeStamp(props.to)}</div> */}
      <div>Starts In: {Math.floor(startsIn / 60) ? <span>{Math.floor(startsIn / 60)} h</span> : null} {startsIn % 60} min</div>
    </div>
  );
};

export default allocationInfo;
