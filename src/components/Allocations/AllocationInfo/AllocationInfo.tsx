import React from "react";
import { formatTimeStamp, millisecondsToMinutes, formatHoursMinutes } from "../../../shared/utility";
import "./AllocationInfo.scss";

interface IProps {
  title: string;
  from: number;
  to: number;
  time: number;
}

export const AllocationInfo: React.FC<IProps> = (props: IProps) => {
  const startsIn = millisecondsToMinutes(props.from - props.time);

  return (
    <div className="AllocationInfo">
      <div className="text-very-small text-gray">Next Meeting</div>
      <div><h4>{props.title}</h4></div>
      <div>{formatTimeStamp(props.from)} - {formatTimeStamp(props.to)}</div>
      <div>Starts In: {formatHoursMinutes(startsIn)}</div>
    </div>
  );
};

export default AllocationInfo;
