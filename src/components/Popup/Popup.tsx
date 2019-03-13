import React, { Children } from "react";
import "./Popup.scss";

const Popup = (props: any) => {
  const classes = ["Popup"];
  if (props.open) {
    classes.push("open");
  }

  return (
    <div className={classes.join(" ")}>
      <button type="button" onClick={props.onCloseClick}>Close</button>
      <p>Hello World</p>
      {props.children}
    </div>
  )
}

export default Popup;