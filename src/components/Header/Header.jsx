import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [enableMenu, setEnableMenu] = useState(false);

  return (
    <header className="header-container">
      <div className="header-bar">
        <h1 className="header-text">NC NEWS</h1>

        <Link to="/account">
          <img
            className="profile-pic"
            src={
              localStorage["avatar-url"]
                ? localStorage["avatar-url"]
                : "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
            }
            width="50rem"
            alt="account-link"
          />
        </Link>
        <button
          className="nav-button"
          onClick={(e) => {
            e.preventDefault();
            setEnableMenu(!enableMenu);
          }}
        >
          {!enableMenu ? "≡" : "x"}
        </button>
      </div>
      {enableMenu && (
        <nav className="navbar">
          <ul className="navbar">
            <li className="nav-list">
              <Link
                className="nav-link"
                to=""
                onClick={() => {
                  setEnableMenu(false);
                }}
              >
                <button className="nav-link"> Home </button>
              </Link>
            </li>
            <li className="nav-list">
              <Link
                className="nav-link"
                to="/articles/all"
                onClick={() => {
                  setEnableMenu(false);
                }}
              >
                <button className="nav-link">Articles</button>
              </Link>
            </li>
            <li className="nav-list">
              <Link
                className="nav-link"
                to="/account"
                onClick={() => {
                  setEnableMenu(false);
                }}
              >
                <button className="nav-link">Account</button>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
