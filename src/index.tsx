import React from "react";
import ReactDOM from "react-dom/client";

import { someFunction } from "./test";
import { Counter } from "./components/Counter";

someFunction(30);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Counter />
  </React.StrictMode>
);