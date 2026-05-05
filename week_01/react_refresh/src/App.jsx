import React, { useState } from "react";

function App() {
  const [timer, setTimer] = useState(0);

  const increament = () => {
    setTimer(timer + 1);
  };

  const decreament = () => {
    setTimer(timer - 1);
  };
  return (
    <>
      <div style={{ display: "flex", gap: 20, fontSize: 26 }}>
        <div style={{ cursor: "pointer" }} onClick={increament}>
          ➕
        </div>
        <div>{timer}</div>
        <div style={{ cursor: "pointer" }} onClick={decreament}>
          ➖
        </div>
      </div>
    </>
  );
}

export default App;
