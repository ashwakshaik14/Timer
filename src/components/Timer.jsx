import React, { useState, useEffect } from "react";
import Controls from "./Controls";
import CustomSettings from "./CustomSettings";

function Timer() {
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isWorkMode, setIsWorkMode] = useState(true);

  const [customWorkMinutes, setCustomWorkMinutes] = useState(25);
  const [customBreakMinutes, setCustomBreakMinutes] = useState(5);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        if (seconds === 0) {
          if ((isWorkMode && workMinutes === 0) || (!isWorkMode && breakMinutes === 0)) {
            switchMode();
          } else {
            setSeconds(59);
            if (isWorkMode) setWorkMinutes((prev) => prev - 1);
            else setBreakMinutes((prev) => prev - 1);
          }
        } else {
          setSeconds((prev) => prev - 1);
        }
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [seconds, isRunning, workMinutes, breakMinutes, isWorkMode]);

  const switchMode = () => {
    setIsWorkMode((prev) => !prev);
    if (isWorkMode) {
      setWorkMinutes(customWorkMinutes);
      setBreakMinutes(customBreakMinutes - 1);
    } else {
      setWorkMinutes(customWorkMinutes - 1);
      setBreakMinutes(customBreakMinutes);
    }
    setSeconds(59);
  };

  const handleStart = () => setIsRunning(true);
  const handleStop = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setIsWorkMode(true);
    setWorkMinutes(25);
    setBreakMinutes(5);
    setSeconds(0);
    setCustomWorkMinutes(25);
    setCustomBreakMinutes(5);
  };

  const handleCustomSet = () => {
    setIsRunning(false);
    setIsWorkMode(true);
    setWorkMinutes(customWorkMinutes);
    setBreakMinutes(customBreakMinutes);
    setSeconds(0);
  };

  const formatTime = (minutes, seconds) => {
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <div>
      <h1>{formatTime(isWorkMode ? workMinutes : breakMinutes, seconds)}</h1>
      <h2>{isWorkMode ? "Work - Time" : "Break - Time"}</h2>

      {/* Render Controls Component */}
      <Controls
        isRunning={isRunning}
        handleStart={handleStart}
        handleStop={handleStop}
        handleReset={handleReset}
      />

      {/* Render Custom Settings Component */}
      <CustomSettings
        customWorkMinutes={customWorkMinutes}
        customBreakMinutes={customBreakMinutes}
        setCustomWorkMinutes={setCustomWorkMinutes}
        setCustomBreakMinutes={setCustomBreakMinutes}
        handleCustomSet={handleCustomSet}
      />
    </div>
  );
}

export default Timer;
