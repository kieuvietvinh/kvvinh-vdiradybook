import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Contribute from "./assets/contribute";
// import Popular_contribute from "./contribute";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="font-roboto">
      <Contribute />
      {/* <Popular_contribute /> */}
    </div>
  </React.StrictMode>
);
