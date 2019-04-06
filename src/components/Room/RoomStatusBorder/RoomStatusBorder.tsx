import React, { ReactNode } from "react";

import "./RoomStatusBorder.scss";
import { RoomStatus } from "../../../models/RoomStatus";

interface IProps {
  roomStatus: RoomStatus;
  children: ReactNode;
}

export const RoomStatusBorder: React.FC<IProps> = (props: IProps) => {
  const classNames = ["RoomStatusBorder"];
  classNames.push(props.roomStatus);
  return <div className={classNames.join(" ")}>{props.children}</div>;
};

export default RoomStatusBorder;
