import React from "react";
import ReactDOM from "react-dom/client";

import { someFunction } from "./test";
import App from "./App";

someFunction(30);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);