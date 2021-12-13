import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./landing/Layout";
import Home from "../pages/landing/Home";
import LandingPage from "./landing/routes";

export default function Index() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/*" element={<LandingPage />} />
      </Route>
      {/* <Route >
        <Route path="dashboard/*" element={<DashBoardPages />}></Route>
      </Route> */}
    </Routes>
  );
}
