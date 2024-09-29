import React from "react";
import ReactDOM from "react-dom/client";

import { someFunction } from "./test";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

someFunction(30);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);