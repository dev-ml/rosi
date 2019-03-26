import React from "react";
import { formatTimeStamp, millisecondsToMinutes } from "../../../shared/utility";
import "./AllocationInfoBig.scss";

const allocationInfoBig = (props: any) => {
  const timeTillEnd = millisecondsToMinutes(props.to - props.time);
  const duration = millisecondsToMinutes(props.to - props.from);
  const timeInMeeting = duration - timeTillEnd;
  const percentInMeeting = Math.round(timeInMeeting / duration * 100);

  return (
    <>
      <div className="AllocationInfoBig">Current Meeting:
        <div>{formatTimeStamp(props.from)} - {formatTimeStamp(props.to)}</div>
        <div>{props.by}</div>
        <div>{props.title}</div>
        {props.attendees ? <div>Attendees: {props.attendees}</div> : null}
        {props.agenda ? <div>Agenda: {props.agenda}</div> : null}
        <div>Duration: {duration} min</div>
        <div>Time till end: {timeTillEnd} min</div>
        <div>% Done: {percentInMeeting}</div>
      </div>
    </>
  );
};

export default allocationInfoBig;
