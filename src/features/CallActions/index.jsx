import React from "react";
import { ZoomIn, ZoomOut, Mic, Camera, Maximize } from "../../utils/assets";

const CallActions = () => {
  return (
    <div className="video-call-actions ">
      <button className="video-action-button mic">
        <Mic />
      </button>
      <button className="video-action-button camera">
        <Camera />
      </button>
      <button className="video-action-button maximize">
        <Maximize />
      </button>
      <button className="video-action-button endcall">Leave</button>
      <button className="video-action-button magnifier">
        <ZoomIn />
        <span>100%</span>
        <ZoomOut />
      </button>
    </div>
  );
};

export default CallActions;
