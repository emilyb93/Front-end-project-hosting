import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <h1 className="header-text">NC NEWS</h1>
      <button
        className="nav-button"
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        =
      </button>
    </header>
  );
};

export default Header;
