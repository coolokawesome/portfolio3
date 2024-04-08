import React, { useState } from "react";
import Taskbar from "./Taskbar";
import Desktop from "./Desktop";
import Login from "./Login";

function App() {
  const [loginScreen, setLoginScreen] = useState(false);

  return (
    <>
      {loginScreen && <Login setLoginScreen={setLoginScreen} />}
      {!loginScreen && (
        <div className="gui-root">
          <Desktop />
          <Taskbar />
        </div>
      )}
    </>
  );
}

export default App;
