import React from "react";
// import * as ReactDOMClient from "react-dom/client";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById("root")
);

// ReactDOMClient.createRoot(<App />, document.getElementById("root"));
