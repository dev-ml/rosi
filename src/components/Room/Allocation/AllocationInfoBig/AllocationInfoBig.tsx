import React from "react";
import { formatTimeStamp, millisecondsToMinutes } from "../../../../shared/utility";
import "./AllocationInfoBig.scss";

const allocationInfoBig = (props: any) => {
  return (
    <>
      <div className="AllocationInfoBig">Current Meeting:
        <div>{formatTimeStamp(props.from)} - {formatTimeStamp(props.to)}</div>
        <div>{props.by}</div>
        <div>{props.title}</div>
        {props.attendees ? <div>Attendees: {props.attendees}</div> : null}
        {props.agenda ? <div>Agenda: {props.agenda}</div> : null}
        <div>Duration: {millisecondsToMinutes(props.to - props.from)} min</div>
        <div>Time till end: {millisecondsToMinutes(props.to - props.time)} min</div>
        <div>% Done: {100 - Math.floor(100 * (props.to - props.time) / (props.to - props.from))}</div>
      </div>
    </>
  );
};

export default allocationInfoBig;
