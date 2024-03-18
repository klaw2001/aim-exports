import React from "react";
import TopBar from "./TopBar";
import MyNavbar from "./Navbar";

const Header = () => {
  return (
    <>
      <header>
        <div className="bg-overlay"></div>
        <TopBar />
        <MyNavbar />
      </header>
    </>
  );
};

export default Header;
