import React, { useState } from "react";
import Draggable from "react-draggable";
import TTCTracker from "./apps/TTCTracker/TTCtracker";
import IE from "./apps/IE/IE";
import RecycleBin from "./apps/RecycleBin/RecycleBin";

const positionGetter = (program: string) => {
  if (program === "Toronto Transit Commission") {
    return { x: 500, y: -140 }
  }
  if (program === "Recycle Bin") {
    return { x: 300, y: 20 }
  }
  if (program === "Internet Explorer") {
    return { x: 200, y: 100 }
  }
  return { x: 50, y: 20 }
}

function Window(props: any) {
  const [fullScreen, setFullScreen] = useState(false)
  const [zIndex, setZindex] = useState(4)

  return (
      <Draggable handle="strong" 
      defaultPosition={positionGetter(props.process)} 
      onStart={() => props.handleZindex(props.process)}>
        <div className="window-root" style={{
          position: 'absolute',
          zIndex: props.zIndex}}
          onClick={() => props.handleZindex(props.process)}>
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
                <button className="fullscreen-button" onClick={() => setFullScreen((fs) => !fs)}>
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
          {props.process === "Toronto Transit Commission" && <TTCTracker />}
          {props.process === "Internet Explorer" && <IE />}
          {props.process === "Recycle Bin" && <RecycleBin />}
        </div>
      </div>
    </Draggable>
  );
}

export default Window;