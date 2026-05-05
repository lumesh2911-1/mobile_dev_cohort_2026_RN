// import React, { use, useState } from "react";

// function App() {
//   const [state, setState] = useState(0);
//   return (
//     <div>
//       {state}
//       <button onClick={() => setState(state + 1)}>Test</button>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const onToggle = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      style={{
        height: "500px",
        width: "500px",
        backgroundColor: darkMode ? "black" : "white",
      }}
    >
      <h1>{darkMode}</h1>

      <button onClick={onToggle}>Toggle Theme</button>
    </div>
  );
}
