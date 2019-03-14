import React from "react";
import "./Popup.scss";
import Backdrop from "../Backdrop/Backdrop";

const Popup = (props: any) => {
  const classes = ["Popup"];
  if (props.open) {
    classes.push("open");
  }

  return (
    <div className={classes.join(" ")}>
      <Backdrop/>
      <div className="content">
        <button type="button" onClick={props.onCloseClick}>Close</button>
        {props.children}
      </div>
    </div>
  )
}

export default Popup;
