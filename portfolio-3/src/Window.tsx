import React from "react";
import Draggable from "react-draggable";
import TTCTracker from "./apps/TTCTracker/TTCtracker";
import { ResizableBox } from "react-resizable";

function Window(props: any) {
  return (
    <Draggable handle="strong">
        <div className="window-root">
        <strong>
          <div className="window-header-container">
            <div className="window-header">
              <div className="window-header-left">
                <img src={props.img} />
                {props.process}
              </div>
              <div className="window-header-right">
                <button
                  className="minimize-button"
                  onClick={() => props.handleMinimizeProcess(props.process)}
                >
                  <i className="icon bi bi-dash"></i>
                </button>
                <button className="fullscreen-button">
                  <i className="icon bi bi-square"></i>
                </button>
                <button
                  className="x-button"
                  onClick={() => props.handlePurgeProcess(props.process)}
                >
                  <i className=" icon bi bi-x" />
                </button>
              </div>
            </div>
          </div>
        </strong>
        <div className="application-wrapper">
        <div className="command-bar">
            <a>File</a>
            <a>Edit</a>
            <a>View</a>
            <a>Tools</a>
            <a>Help</a>
        </div>
          {props.process === "TTC Tracker (toronto)" && <TTCTracker />}
        </div>
      </div>
    </Draggable>
  );
}

export default Window;
