import React from "react";
import "./TimeView.scss"

const timeView = (props: any) => {
  const date = new Date(props.time).toLocaleTimeString("en-US", {hour: '2-digit', minute:'2-digit', hour12: false});
  return (
    <div className="TimeView">{date}</div>
  )
}

export default timeView;
