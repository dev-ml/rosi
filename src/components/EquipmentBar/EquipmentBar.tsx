import React from "react";
import { Equipment } from "../../models/Equipment";
import "./EquipmentBar.scss";

const equipmentBar = (props: { equipment: Equipment[], onChangeStatusClick: (e: Equipment) => void }) => {
  const mapEquipmentToButton = (e: Equipment) => {
    return (
      <button key={e.type} className={`btn btn_${e.status.toLowerCase()}`} onClick={() => props.onChangeStatusClick(e)}>
        <svg className={`icon icon_${e.status.toLowerCase()} icon-${e.type.toLowerCase()}`}>
          <use xlinkHref={`symbol-defs.svg#icon-${e.type.toLowerCase()}`}/>
        </svg>
      </button>
    );
  };

  return (
    <div className="EquipmentBar">
      {props.equipment.map((e: Equipment) => mapEquipmentToButton(e))}
    </div>
  );
};

export default equipmentBar;
