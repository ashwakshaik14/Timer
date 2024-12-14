import React from "react";

function Controls({ isRunning, handleStart, handleStop, handleReset }) {
  return (
    <div>
      <button onClick={handleStart} disabled={isRunning}>
        Start
      </button>
      <button onClick={handleStop} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Controls;
