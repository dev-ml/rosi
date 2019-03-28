import React from "react";

import "./RoomStatusBorder.scss";

const RoomStatusBorder = (props: any) => {
  const classNames = ["RoomStatusBorder"];
  classNames.push(props.roomStatus);
  return <div className={classNames.join(" ")}>{props.children}</div>;
};

export default RoomStatusBorder;
