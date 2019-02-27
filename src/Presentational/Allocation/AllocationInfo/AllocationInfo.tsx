import React from "react";
import "./AllocationInfo.scss";

const allocationInfo = (props: any) => {
  console.log("allocationInfo: ", props);
  const from = new Date(props.from).toLocaleTimeString("en-US", {hour: '2-digit', minute:'2-digit', hour12: false});
  const to = new Date(props.to).toLocaleTimeString("en-US", {hour: '2-digit', minute:'2-digit', hour12: false});
  
  return (
    <div className="AllocationInfo">Next Meeting:
      <div>{from} - {to}</div>
      <div>{props.by}</div>
      <div>{props.title}</div>
    </div>
  );
};

export default allocationInfo;
