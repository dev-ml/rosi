import React from "react";
import "./SyncStatusBar.scss";
import { formatTimeStamp } from "../../../shared/utility";

interface IProps {
  syncInformation: any;
}

export const SyncStatusBar: React.FC<IProps> = (props: IProps) => {
  console.log("[SyncStatusBar] syncInfo: ", props.syncInformation);
  return (
    <div className="SyncStatusBar">
      <span>{`${props.syncInformation.connecting ? "Connecting..." : props.syncInformation.connected ? "Connected" : "Not Connected"}`}</span>
      {/* // [TODO] check if connection message should be used */}
      <span>{`Auto sync: ${props.syncInformation.autoSync ? "on" : "off"}`}</span>
      <span>{`${props.syncInformation.syncing ? "Syncing..." : props.syncInformation.syncMessage || "" }`}</span>
      <span>{props.syncInformation.lastSynced > 0 ? `Last synced: ${formatTimeStamp(props.syncInformation.lastSynced)} ${new Date(props.syncInformation.lastSynced).toLocaleDateString()}` : ""}</span>
    </div>
  );
};

export default SyncStatusBar;
