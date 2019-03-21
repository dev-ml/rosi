import React from "react";

const Button = (props: any) => {
  let buttonElement = <button>Not configured button</button>;

  switch (props.type) {
    case "icon":
      buttonElement = (
        <button className={`btn ${props.btnClassName}`} onClick={props.onClick} aria-label={props.iconId}>
          <svg className={`icon`}>
            <use xlinkHref={`symbol-defs.svg#${props.iconId}`} />
          </svg>
        </button>
      );
      break;
      case "icon-text":
      buttonElement = (
        <button className="btn btn_flat" onClick={props.onClick} aria-label={props.label}>
          <svg className="icon">
            <use xlinkHref={`symbol-defs.svg#${props.iconId}`} />
          </svg>
          <span>{props.label}</span>
        </button>
      );
      break;
  }
  
  return buttonElement;
};

export default Button;
