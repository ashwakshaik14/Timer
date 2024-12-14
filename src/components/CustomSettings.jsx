import React from "react";

function CustomSettings({
  customWorkMinutes,
  customBreakMinutes,
  setCustomWorkMinutes,
  setCustomBreakMinutes,
  handleCustomSet,
}) {
  return (
    <div style={{ marginTop: "20px" }}>
      <input
        type="number"
        value={customWorkMinutes}
        onChange={(e) => setCustomWorkMinutes(Number(e.target.value))}
        min="1"
      />
      <span> Work Minutes </span>

      <input
        type="number"
        value={customBreakMinutes}
        onChange={(e) => setCustomBreakMinutes(Number(e.target.value))}
        min="1"
      />
      <span> Break Minutes </span>

      <button onClick={handleCustomSet}>Set</button>
    </div>
  );
}

export default CustomSettings;
