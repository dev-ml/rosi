import React from "react";
import { Equipment } from "../../../models/Equipment";
import "./EquipmentBar.scss";
import Button from "../../UI/Button/Button";

const equipmentBar = (props: { equipment: Equipment[], onChangeStatusClick: (e: Equipment) => void }) => {
  const mapEquipmentToButton = (e: Equipment) => {
    return <Button
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
