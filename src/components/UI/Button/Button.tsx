import React from "react";
import "./Button.scss";
import icons from "../../../assets/symbol-defs.svg";

const Button = (props: any) => {

  const getButtonType = () => props.btnType || "button"

  let buttonElement = <button type={getButtonType()} className={props.btnClassName}  onClick={props.onClick} aria-label={props.iconId}>{props.label}</button>;

  switch (props.style) {
    case "icon":
      buttonElement = (
        <button type={getButtonType()} className={`btn ${props.btnClassName}`} onClick={props.onClick} aria-label={props.iconId}>
          <svg className={`icon`}>
            <use xlinkHref={`${icons}#${props.iconId}`} />
          </svg>
        </button>
      );
      break;
    case "icon-text":
      buttonElement = (
        <button type={getButtonType()} className="btn btn_flat" onClick={props.onClick} aria-label={props.label}>
          <svg className="icon">
            <use xlinkHref={`${icons}#${props.iconId}`} />
          </svg>
          <span>{props.label}</span>
        </button>
      );
      break;
    case "text":
      buttonElement = (
        <button type={getButtonType()} className="btn btn_flat" onClick={props.onClick} aria-label={props.label}>
          <span>{props.label}</span>
        </button>
      );
      break;
  }
  
  return buttonElement;
};

export default Button;
