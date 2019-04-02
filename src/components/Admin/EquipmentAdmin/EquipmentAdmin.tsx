import React from "react";
import { EquipmentType } from "../../../models/EquipmentType";
import "./EquipmentAdmin.scss";

interface IProps {
  roomId: string;
  onEquipmentToggleClick: (roomId: string, type: EquipmentType) => void;
}

export const EquipmentAdmin: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="EquipmentAdmin">
      <label>Room Equipment</label>
      {Object.values(EquipmentType).map((type: any) => {
        // tslint:disable-next-line: jsx-no-multiline-js
        // tslint:disable-next-line: max-line-length
        return <div key={type}><button type="button" onClick={() => props.onEquipmentToggleClick(props.roomId, type)}>{type}</button></div>;
      })}
    </div>
  );
};

export default EquipmentAdmin;
