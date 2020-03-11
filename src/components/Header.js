import React from "react";
import "./Header.css";
import Logo from "./logo.png";

function Header() {
  return (
    <header className="header">
      <img className="logo" src={Logo} alt="Q-Master logo" />
    </header>
  );
}

export default Header;
