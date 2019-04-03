import React from "react";
import { EquipmentType } from "../../../models/EquipmentType";
import "./EquipmentAdmin.scss";
import { Equipment } from "../../../models/Equipment";
import Button from "../../UI/Button/Button";

interface IProps {
  roomId: string;
  equipment: Equipment[];
  onEquipmentToggleClick: (roomId: string, type: EquipmentType) => void;
}

export const EquipmentAdmin: React.FC<IProps> = (props: IProps) => {
  console.log("[EquipmentAdmin] selected room id: ", props.roomId);
  const mapEquipmentToButton = (type: EquipmentType) => {
    let btnSelected = false;

    if (props.equipment) {
      btnSelected = props.equipment.find((e: Equipment) => e.type === type) ? true : false;
    }

    return <Button
      key={type}
      style="icon"
      onClick={() => props.onEquipmentToggleClick(props.roomId, type)}
      iconId={`icon-${type.toLowerCase()}`}
      btnClassName={`btn_dark btn_flat ${btnSelected ? "btn_selected" : ""}`}
    />;
  };

  return (
    <div className="EquipmentAdmin">
      <label className="Label">Room Equipment</label>
      <div className="EquipmentAdminIcons">
        {Object.values(EquipmentType).map((type: EquipmentType) => mapEquipmentToButton(type))}
      </div>
    </div>
  );
};

export default EquipmentAdmin;
