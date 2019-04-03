import React from "react";
import "./Button.scss";
import icons from "../../../assets/symbol-defs.svg";

interface IProps {
  label?: string;
  onClick?: () => void;
  btnType?: string;
  btnClassName?: string;
  iconId?: string;
  style?: string;
  disabled?: boolean
}

export const Button: React.FC<IProps> = (props: IProps) => {

  const getButtonType = () => props.btnType || "button";

  let buttonElement =
  <button
    type={getButtonType()}
    className={props.btnClassName}
    onClick={props.onClick}
    aria-label={props.iconId}
    disabled={props.disabled}
  >
    {props.label}
  </button>;

  switch (props.style) {
    case "icon":
      buttonElement = (
        // tslint:disable-next-line: max-line-length
        <button type={getButtonType()} className={`btn ${props.btnClassName}`} onClick={props.onClick} aria-label={props.iconId}>
          <svg className={`icon`}>
            <use xlinkHref={`${icons}#${props.iconId}`} />
          </svg>
        </button>
      );
      break;
    case "icon-text":
      buttonElement = (
        <button type={getButtonType()} className={`btn btn_icon-text ${props.btnClassName}`} onClick={props.onClick} aria-label={props.label}>
          <svg className="icon">
            <use xlinkHref={`${icons}#${props.iconId}`} />
          </svg>
          <span>{props.label}</span>
        </button>
      );
      break;
    case "icon-text-large":
      buttonElement = (
        <button type={getButtonType()} className={`btn btn_icon-text btn_flat ${props.btnClassName || ""}`} onClick={props.onClick} aria-label={props.label}>
          <svg className="icon">
            <use xlinkHref={`${icons}#${props.iconId}`} />
          </svg>
          <span>{props.label}</span>
        </button>
      );
      break;
    case "text":
      buttonElement = (
        <button type={getButtonType()} className={`btn ${props.btnClassName}`} onClick={props.onClick} aria-label={props.label}>
          <span>{props.label}</span>
        </button>
      );
      break;
  }

  return buttonElement;
};

export default Button;
