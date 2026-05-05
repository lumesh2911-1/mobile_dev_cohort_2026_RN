import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import H1 from "./components/H1";

// const h1 = React.createElement("h1", null, "Test");
// const p1 = React.createElement("p", null, "Test1");
createRoot(document.getElementById("root")).render(
  <>
    <Header />
    {/* <h1>Test {2 + 2}</h1>
    <h1>Test1</h1> */}
    <H1 title="Test" desc="I am testing" />
  </>,
);
