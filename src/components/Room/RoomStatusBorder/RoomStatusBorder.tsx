import React from "react";

import "./RoomStatusBorder.scss";

const roomStatusBorder = (props: any) => {
  const classNames = ["RoomStatusBorder"];
  classNames.push(props.roomStatus);
  return <div className={classNames.join(" ")}>{props.children}</div>;
};

export default roomStatusBorder;
