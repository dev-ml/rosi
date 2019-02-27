import React from "react";
import "./AllocationInfoBig.scss";

const allocationInfo = (props: any) => {
  console.log("allocationInfo: ", props);
  const from = new Date(props.from).toLocaleTimeString("en-US", {hour: '2-digit', minute:'2-digit', hour12: false});
  const to = new Date(props.to).toLocaleTimeString("en-US", {hour: '2-digit', minute:'2-digit', hour12: false});
  return (
    <>
      <div className="AllocationInfoBig">Current Meeting:
        <div>{from} - {to}</div>
        <div>{props.by}</div>
        <div>{props.title}</div>
        {props.attendees ? <div>Attendees: {props.attendees}</div> : null}
        {props.agenda ? <div>Agenda: {props.agenda}</div> : null}
      </div>
    </>
  );
};

export default allocationInfo;
