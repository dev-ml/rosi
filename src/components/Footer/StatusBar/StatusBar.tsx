import React from "react";
import "./StatusBar.scss";
import Button from "../../UI/Button/Button";
import SignInButton from "../../Google/SignInButton";

interface IProps {
  onAdminClick: () => void;
}

export const StatusBar: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="StatusBar">
      <Button onClick={props.onAdminClick} iconId="icon-settings" label="Admin" />
    </div>
  );
};

export default StatusBar;
