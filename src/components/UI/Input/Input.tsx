import React from "react";

import "./Input.scss";

interface IProps {
  invalid: boolean;
  shouldValidate: boolean;
  touched: boolean;
  elementType: string;
  elementConfig: any;
  label: string;
  value: any;
  changed: (event: any) => void;
}

export const Input: React.FC<IProps> = (props: IProps) => {
  let inputElement = null;
  const inputClasses = ["InputElement"];

  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push("Invalid");
  }

  switch (props.elementType) {
    case ("input"):
      inputElement = <input
        className={inputClasses.join(" ")}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
      />;
      break;
    case ("textarea"):
      inputElement = <textarea
        className={inputClasses.join(" ")}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
      />;
      break;
    case ("select"):
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.changed}
        >
          {
            // tslint:disable-next-line: jsx-no-multiline-js
            props.elementConfig.options.map((option: any) => (
              <option key={option.value} value={option.value}>
                {option.displayValue}
              </option>
            ))}
        </select>
      );
      break;
    default:
      inputElement = <input
        className={inputClasses.join(" ")}
        {...props.elementConfig}
        value={props.value}
        onChange={props.changed}
      />;
  }

  return (
    <div className={"Input"}>
      <label className={"Label"}>{props.label}</label>
      {inputElement}
    </div>
  );

};

export default Input;
