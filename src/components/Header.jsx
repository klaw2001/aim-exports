import React from "react";
import { useLocation } from "react-router-dom";
import TopBar from "./TopBar";
import MyNavbar from "./Navbar";

const Header = () => {
  const location = useLocation();

  // Determine the height of the overlay based on the current URL
  const overlayHeight = location.pathname === "/" ? "110vh" : "60vh";

  return (
    <header>
      <div className="bg-overlay" style={{ height: overlayHeight }}></div>
      <TopBar />
      <MyNavbar />
    </header>
  );
};

export default Header;
