import React, { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log("Welcome");
  }, [counter, setCounter]);
  return (
    <div style={{ display: "flex", gap: 30, fontSize: 24 }}>
      <div onClick={() => setCounter(counter + 1)}>➕</div>
      <div>{counter}</div>
      <div onClick={() => setCounter(counter - 1)}>➖</div>
    </div>
  );
}

export default App;
