import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import CardDetail from "./CardDetail";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/card/:id" element={<CardDetail />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
