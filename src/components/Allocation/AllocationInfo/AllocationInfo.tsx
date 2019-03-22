import React from "react";
import { formatTimeStamp } from "../../../shared/utility";
import "./AllocationInfo.scss";

const allocationInfo = (props: any) => {
  console.log("allocationInfo: ", props);

  return (
    <div className="AllocationInfo">Next Meeting:
      <div>{formatTimeStamp(props.from)} - {formatTimeStamp(props.to)}</div>
      <div>{props.by}</div>
      <div>{props.title}</div>
    </div>
  );
};

export default allocationInfo;
