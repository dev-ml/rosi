import React from "react";
import Admin from "../../../containers/Admin/Admin";
import Footer from "../../../containers/Footer/Footer";
import Header from "../../../containers/Header/Header";
import Room from "../../../models/Room";
import Popup from "../../UI/Popup/Popup";
import RoomViewContent from "../RoomViewContent/RoomViewContent";
import "./RoomView.scss";

interface IProps {
  room: Room;
  adminPanelOpen: boolean;
  onPopupCloseClick: () => void;
}

export const RoomView: React.FC<IProps> = (props: IProps) => {
  if (!props.room) {
    console.error("[RoomView] No room provided!");
    return <span>No room provided</span>;
  }

  return (
    <div className="RoomView">
      <Header />
      <RoomViewContent />
      <Footer />
      <Popup open={props.adminPanelOpen} onCloseClick={props.onPopupCloseClick}>
        <Admin />
      </Popup>
    </div>
  );
};

export default RoomView;
