import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Pizza />
  </React.StrictMode>
);

function Pizza() {
  return <h1>Hello</h1>;
}
