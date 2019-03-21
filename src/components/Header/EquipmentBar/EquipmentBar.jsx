// @flow
import React from "react";
import { Equipment } from "../../../models/Equipment";
import "./EquipmentBar";
import Button from "../../UI/Button/Button";

const equipmentBar = (props: any) => {
  const mapEquipmentToButton = (e) => {
    return <Button
      key={e.type}
      type="icon"
      onClick={() => props.onChangeStatusClick(e)}
      iconId={`icon-${e.type.toLowerCase()}`}
      btnClassName={`btn_${e.status.toLowerCase()}`}
    />;
  };

  return (
    <div className="EquipmentBar">
      {props.equipment.map((e: Equipment) => mapEquipmentToButton(e))}
    </div>
  );
};

export default equipmentBar;
