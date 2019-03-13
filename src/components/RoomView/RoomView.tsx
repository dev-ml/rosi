import React from "react";
import AllocationInfo from "../Allocation/AllocationInfo/AllocationInfo";
import AllocationInfoBig from "../Allocation/AllocationInfoBig/AllocationInfoBig";
import AllocationMenu from "../Allocation/AllocationMenu/AllocationMenu";
import RoomStatusBorder from "../RoomStatusBorder/RoomStatusBorder";
import StatusBar from "../StatusBar/StatusBar";
import TimeView from "../TimeView/TimeView";
import "./RoomView.scss";
import Header from "../Header/Header";
import Popup from "../Popup/Popup";

const roomView = (props: any) => {
  console.log("roomView: ", props);
  let currentAllocationTag;
  let nextAllocationTag;

  if (props.currentAllocation) {
    currentAllocationTag =
    <AllocationInfoBig
      {...props.currentAllocation}
    />;
  }

  if (props.nextAllocation) {
    nextAllocationTag = <AllocationInfo {...props.nextAllocation}/>;
  }

  return (
    <div className="RoomView">
      <Header time={props.time} {...props}/>
      <RoomStatusBorder roomStatus={props.roomStatus}>
        <TimeView time={props.time} />
        <div className="Separator"/>
        <div className="RightSection">
          {currentAllocationTag}
          {nextAllocationTag}
          <AllocationMenu
            currentAllocation={props.currentAllocation}
            nextAllocation={props.nextAllocation}
            roomStatus={props.roomStatus}
            onFinishEarlyClick={props.onFinishEarlyClick}
            onExtendMeetingClick={props.onExtendMeetingClick}
            onConfirmMeetingClick={props.onConfirmMeetingClick}
            onAddMeetingClick={props.onAddMeetingClick}
          />
        </div>
      </RoomStatusBorder>
      <StatusBar onAdminClicked={props.onAdminClick}/>
      <Popup open={props.adminPanelOpen} onCloseClick={props.onPopupCloseClick}>
        <p>This is first child</p>
        <div>This is second</div>
        {/* <AdminPanel></AdminPanel> */}
      </Popup>
    </div>
  );
};

export default roomView;
