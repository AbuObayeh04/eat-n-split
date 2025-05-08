import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

function Model() {
  return <div className = 'Model'>
    <div>
      <p>How do you do?</p>
    </div>
  </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
