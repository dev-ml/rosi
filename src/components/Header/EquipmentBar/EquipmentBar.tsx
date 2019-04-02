import React from "react";
import { Equipment } from "../../../models/Equipment";
import "./EquipmentBar.scss";
import Button from "../../UI/Button/Button";

interface IProps {
  equipment: Equipment[];
  onChangeStatusClick: (e: Equipment) => void;
}

export const EquipmentBar: React.FC<IProps> = (props: IProps) => {
  const mapEquipmentToButton = (e: Equipment) => {
    return <Button
      key={e.type}
      style="icon"
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

export default EquipmentBar;
