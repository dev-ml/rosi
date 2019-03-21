import React from "react";
import { formatTimeStamp } from "../../../../shared/utility";
import "./AllocationInfoBig.scss";

const allocationInfo = (props: any) => {
  return (
    <>
      <div className="AllocationInfoBig">Current Meeting:
        <div>{formatTimeStamp(props.from)} - {formatTimeStamp(props.to)}</div>
        <div>{props.by}</div>
        <div>{props.title}</div>
        {props.attendees ? <div>Attendees: {props.attendees}</div> : null}
        {props.agenda ? <div>Agenda: {props.agenda}</div> : null}
      </div>
    </>
  );
};

export default allocationInfo;
