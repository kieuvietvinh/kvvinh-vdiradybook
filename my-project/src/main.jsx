import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Contribute from "./assets/contribute";
import Utilities from "./utilities";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="font-roboto bg-slate-100">
      {/* <Contribute /> */}
      <Utilities />
    </div>
  </React.StrictMode>
);
