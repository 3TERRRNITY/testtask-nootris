import React, { useState } from "react";
import "./Navbar.scss";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../vector/logo.png";
import shoppingBag from "../../vector/shopping-bag.png";

export default function Navbar({ navbarLinks }) {
  const [menuClicked, setMenuClicked] = useState(true);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };
  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="nootris-logo" className="navbar-logo" />

        {menuClicked ? (
          <FiMenu size={25} className="navbar-menu" onClick={toggleMenuClick} />
        ) : (
          <FiX size={25} className="navbar-menu" onClick={toggleMenuClick} />
        )}
        <div className="navbar-links">
          <ul
            className={
              menuClicked ? "navbar-list" : "navbar-list navbar-list--active"
            }
          >
            {navbarLinks.map((item) => (
              <li className="navbar-item">
                <a href={item.url} className="navbar-link">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="header__bag">
            <img src={shoppingBag} alt="shopping-bag" />
            <div className="header__bag-count">
              <p>1</p>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
