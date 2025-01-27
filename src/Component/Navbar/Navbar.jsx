import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <header className="header">
        <a href="" className="logo">
          <img className="logoi" src="/img/logo.png" alt="" />
        </a>
        <nav className="navbar">
          <a href="/" className="Nav_Text">
            Home
          </a>
          <a href="/" className="Nav_Text">
            Shop
          </a>
          <a href="/" className="Nav_Text">
            Pages
          </a>
          <a href="/" className="Nav_Text">
            About
          </a>
          <a href="/" className="Nav_Text">
            Contact
          </a>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
