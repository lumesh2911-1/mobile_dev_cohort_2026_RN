import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  // const [timer, setTimer] = useState(0);

  // const increament = () => {
  //   setTimer(timer + 1);
  // };

  // const decreament = () => {
  //   setTimer(timer - 1);
  // };

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      {/* <div style={{ display: "flex", gap: 20, fontSize: 26 }}>
        <div style={{ cursor: "pointer" }} onClick={increament}>
          ➕
        </div>
        <div>{timer}</div>
        <div style={{ cursor: "pointer" }} onClick={decreament}>
          ➖
        </div> 
      </div> */}
      <div
        style={{
          height: "400px",
          width: "400px",
          border: "1px solid black",
          padding: "20px",
          backgroundColor: darkMode === true ? "black" : "white",
        }}
      >
        <button onClick={handleToggle}>Press Me</button>
      </div>
    </>
  );
}

export default App;
