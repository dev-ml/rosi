import React from "react";
import AllocationInfo from "../../Allocation/AllocationInfo/AllocationInfo";
import AllocationInfoBig from "../../Allocation/AllocationInfoBig/AllocationInfoBig";
import AllocationMenu from "../../Allocation/AllocationMenu/AllocationMenu";
import RoomStatusBorder from "../RoomStatusBorder/RoomStatusBorder";
import StatusBar from "../../StatusBar/StatusBar";
import TimeView from "../TimeView/TimeView";
import "./RoomView.scss";
import Header from "../../Header/Header";
import Popup from "../../UI/Popup/Popup";
import Admin from "../../../containers/Admin/Admin";

const roomView = (props: any) => {
  // console.log("roomView: ", props);
  if (!props.room) {
    console.error("[RoomView] No room provided!");
    return <Admin/>;
  }

  let currentAllocationTag;
  let nextAllocationTag;

  // [TODO] Overlapping events, if current event is overlapping next
  if (props.currentAllocation) {
    currentAllocationTag =
    <AllocationInfoBig time={props.time}
      {...props.currentAllocation}
    />;
  }

  if (props.nextAllocation) {
    nextAllocationTag = <AllocationInfo time={props.time} {...props.nextAllocation}/>;
  }

  return (
    <div className="RoomView">
      <Header time={props.time} {...props}/>
      <RoomStatusBorder roomStatus={props.roomStatus}>
        <TimeView time={props.time} />
        <div className="Separator"/>
        <div className="RightSection">
          <div className="Allocations">
            {currentAllocationTag}
            {nextAllocationTag}
          </div>
          <AllocationMenu
            currentAllocation={props.currentAllocation}
            nextAllocation={props.nextAllocation}
            roomStatus={props.roomStatus}
            roomId={props.room.id}
            onFinishEarlyClick={props.onFinishEarlyClick}
            onExtendMeetingClick={props.onExtendMeetingClick}
            onConfirmMeetingClick={props.onConfirmMeetingClick}
            onAddMeetingClick={props.onAddMeetingClick}
          />
        </div>
      </RoomStatusBorder>
      <StatusBar room={props.room} onAdminClicked={props.onAdminClick}/>
      <Popup open={props.adminPanelOpen} onCloseClick={props.onPopupCloseClick}>
        <Admin></Admin>
      </Popup>
    </div>
  );
};

export default roomView;
