import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/dashboard/Navbar";
import Footer from "../../components/landing/Footer";
export default function Layout() {
  return (
    <div>
      <Navbar />
      {/* <Sidebar /> */}
      <Outlet />

      <Footer />
    </div>
  );
}
