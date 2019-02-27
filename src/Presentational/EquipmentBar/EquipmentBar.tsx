import React from "react";
import { Equipment } from "../../Models/Equipment";
import "./EquipmentBar.scss";

const equipmentBar = (props: { equipment: Equipment[], onChangeStatusClick: (e: Equipment) => void }) => {
  return (
    <div className="EquipmentBar">
      {props.equipment.map((e: Equipment) => {
        return (
          <button key={e.type} className={`btn btn_${e.status.toLowerCase()}`} onClick={() => props.onChangeStatusClick(e)}>
            <svg className={`icon icon_${e.status.toLowerCase()} icon-${e.type.toLowerCase()}`}>
              <use xlinkHref={`symbol-defs.svg#icon-${e.type.toLowerCase()}`}></use>
            </svg>
          </button>
        )
      })
    }
    </div>
  )
}

export default equipmentBar;

{/* <svg viewBox="0 0 100 100" className="icon shape-codepen">
<use xlinkHref={`/Assets/sprite.svg#shape-codepen#shape-${e.type.toLowerCase()}`} />
</svg> */}
{/* <i className={`fab fa-${e.type.toLowerCase()}`}></i> */}