import React from "react";
import "./Popup.scss";
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";

const Popup = (props: any) => {
  const classes = ["Popup"];
  if (props.open) {
    classes.push("open");
  }

  return (
    <div className={classes.join(" ")}>
      <Backdrop/>
      <div className="PopupContent">
        <Button
          btnClassName="PopupClose btn_dark"
          style="text"
          onClick={props.onCloseClick}
          label="x"
        />
        {props.children}
      </div>
    </div>
  )
}

export default Popup;
