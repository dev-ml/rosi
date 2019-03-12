import React from "react";
import { formatTimeStamp } from "../../shared/utility";
import "./TimeView.scss";

const timeView = (props: any) => {
  return (
    <div className="TimeView">{formatTimeStamp(props.time)}</div>
  );
};

export default timeView;
