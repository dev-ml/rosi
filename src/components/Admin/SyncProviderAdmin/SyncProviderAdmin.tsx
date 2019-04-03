import React from "react";
import "./SyncProviderAdmin.scss";
import { dataURLToBlob } from "blob-util";
import Button from "../../UI/Button/Button";

interface IProps {
  onConnect: () => void;
  data: any;
}

const SyncProviderAdmin = (props: IProps) => {
  let button;
  if (props.data.connecting) {
    button = <Button
      style="text"
      label="Connecting"
      disabled={true}
      btnClassName={`btn_dark btn_flat btn_yellow`}
    />;
  } else {
    if (props.data.connected) {
      button = <Button
        style="text"
        label="Disconnect"
        onClick={() => console.log("[SyncProviderAdmin][TODO] Disconnect")}
        btnClassName={`btn_dark btn_flat btn_red`}
      />
    } else {
      button = <Button
        style="text"
        label="Connect"
        onClick={() => props.onConnect()}
        btnClassName={`btn_dark btn_flat btn_green`}
      />
    }
  }
  return (
    <div className="SyncProviderAdmin">
      <label className="Label">Sync</label>
      {button}
      <span>{props.data.connectionMessage}</span>
      {/* <button type="button" onClick={() => props.onConnect()}>{button}</button> */}
    </div>
  )
}

export default SyncProviderAdmin;
