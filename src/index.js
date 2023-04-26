import React from "react";
// import * as ReactDOMClient from "react-dom/client";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store"

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// const root =ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//   <Provider store={store}>
//   <BrowserRouter>
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   </BrowserRouter>
//   </Provider>
// );

// ReactDOMClient.createRoot(<App />, document.getElementById("root"));
