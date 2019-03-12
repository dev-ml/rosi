import React from "react";
import "./Header.scss";

const Header = (props: any) => {
  return <h1 className="Header-Heading1">{props.name}</h1>;
};

export default Header;
