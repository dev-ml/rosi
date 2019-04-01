import React from "react";
import Admin from "../../../containers/Admin/Admin";
import Header from "../../Header/Header";
import RoomViewContent from "../RoomViewContent/RoomViewContent";
import "./RoomView.scss";
import Footer from "../../Footer/Footer";
import Popup from "../../UI/Popup/Popup";

const roomView = (props: any) => {
  // console.log("roomView: ", props);
  if (!props.room) {
    console.error("[RoomView] No room provided!");
    return <span>No room provided</span>;
  }

  return (
    <div className="RoomView">
      <Header {...props} />
      <RoomViewContent {...props} />
      <Footer {...props} />
      <Popup open={props.adminPanelOpen} onCloseClick={props.onPopupCloseClick}>
        <Admin />
      </Popup>
    </div>
  );
};

export default roomView;
