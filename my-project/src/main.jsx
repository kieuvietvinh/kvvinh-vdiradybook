import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {} from "react-router-dom";
import Utilities from "./utilities";
import Portfolio_details from "./details";
// import Contribute from "./assets/contribute";
import Home from "./home_page";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio_details />} />
        <Route path="/news" element={<Utilities />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
