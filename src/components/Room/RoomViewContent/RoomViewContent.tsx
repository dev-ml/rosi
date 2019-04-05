import React from "react";
import Allocations from "../../../containers/Allocations/Allocations";
import Clock from "../../../containers/Clock/Clock";
import "./RoomViewContent.scss";

export const RoomViewContent: React.FC = () => {
  return (
    <div className="RoomViewContent">
      <Clock />
      <div className="RoomViewContentSeparator" />
      <Allocations />
    </div>
  );
};

export default RoomViewContent;
