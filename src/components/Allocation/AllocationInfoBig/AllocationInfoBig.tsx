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
      <div className="AllocationInfoBig">
        <div>In Progress</div>
        <div><h2>{props.title}</h2></div>
        <div><span>{formatTimeStamp(props.from)} - {formatTimeStamp(props.to)}</span></div>
        {/* <div><h3>{props.by}</h3><span>{formatTimeStamp(props.from)} - {formatTimeStamp(props.to)}</span></div> */}
        <div>Ends In: {Math.floor(timeTillEnd / 60) ? <span>{Math.floor(timeTillEnd / 60)} h</span> : null} {timeTillEnd % 60} min</div>
        {props.attendees ? <div>{props.attendees} attendees</div> : null}
        {props.agenda ? <div>Agenda: {props.agenda}</div> : null}
        {/* <div>Duration: {duration} min</div> */}
        {/* <div>% Done: {percentInMeeting}</div> */}
      </div>
    </>
  );
};

export default allocationInfoBig;
