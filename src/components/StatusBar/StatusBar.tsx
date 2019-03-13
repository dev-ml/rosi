import React from "react";
import "./StatusBar.scss";

const StatusBar = (props: any) => {
  return (
    <div className="StatusBar">
      <div>This is StatusBar</div>
      <button type="button" className="btn" onClick={() => props.onAdminClicked()}>Admin</button>
    </div>
  );
};

export default StatusBar;
