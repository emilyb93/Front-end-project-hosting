import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [enableMenu, setEnableMenu] = useState(false);
  return (
    <header>
      <h1 className="header-text">NC NEWS</h1>
      <Link to="/account">
        <img
          src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
          width="50rem"
          alt="account-link"
        />
      </Link>
      <button
        className="nav-button"
        onClick={(e) => {
          e.preventDefault();
          setEnableMenu(true);
        }}
      >
        =
      </button>
      {enableMenu && (
        <ul className="menu">
          <li id="menu-close">
            <button
              onClick={(e) => {
                e.preventDefault();
                setEnableMenu(false);
              }}
            >
              X
            </button>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
