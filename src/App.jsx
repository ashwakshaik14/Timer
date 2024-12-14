import React from "react";
import Timer from "./components/Timer";
import Controls from "./components/Controls";
import CustomSettings from "./components/CustomSettings";

function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px", fontFamily: "Arial" }}>
      <h1>Pomodoro Timer</h1>
      <Timer />
    </div>
  );
}

export default App;
