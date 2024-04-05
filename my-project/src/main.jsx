import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {} from "react-router-dom";
import Utilities from "./utilities";
import Portfolio_details from "./details";
// import Contribute from "./assets/contribute";
import Home from "./home_page";
import New_branch from "./new_branch";
import Management from "./assets/management";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes className="">
        <Route path="/" element={<Portfolio_details />} />
        <Route path="/news" element={<Utilities />} />
        <Route path="/home" element={<Home />} />
        <Route path="/branch" element={<New_branch />} />
        <Route path="/mana" element={<Management />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
