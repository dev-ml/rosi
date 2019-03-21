import React from "react";
import "./StatusBar.scss";
import Button from "../UI/Button/Button";

const StatusBar = (props: any) => {
  return (
    <div className="StatusBar">
      <div>This is StatusBar</div>
      <Button type="icon-text" onClick={props.onAdminClicked} iconId="icon-settings" label="Admin" />
    </div>
  );
};

export default StatusBar;
