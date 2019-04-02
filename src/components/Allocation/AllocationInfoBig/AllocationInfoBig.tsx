import React from "react";
import { formatTimeStamp, millisecondsToMinutes, formatHoursMinutes } from "../../../shared/utility";
import "./AllocationInfoBig.scss";

interface IProps {
  title: string;
  from: number;
  to: number;
  time: number;
  attendees?: number;
}

export const AllocationInfoBig: React.FC<IProps> = (props: IProps) => {
  const timeTillEnd = millisecondsToMinutes(props.to - props.time);
  const duration = millisecondsToMinutes(props.to - props.from);
  const timeInMeeting = duration - timeTillEnd;

  return (
    <>
      <div className="AllocationInfoBig">
        <div className="text-small text-gray">In Progress</div>
        <div><h2>{props.title}</h2></div>
        <div><span>{formatTimeStamp(props.from)} - {formatTimeStamp(props.to)}</span></div>
        <div>Ends In: {formatHoursMinutes(timeTillEnd)}</div>
        {props.attendees ? <div>{props.attendees} attendees</div> : null}
      </div>
    </>
  );
};

export default AllocationInfoBig;
