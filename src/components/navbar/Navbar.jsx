import React, { useState } from "react";
import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <NavLink to="/" className="nav-link">
            <h1>
              Dream<span>HOME</span>
            </h1>
          </NavLink>
        </div>
        <div className="navbar-links">
          <ul className={toggle ? "nav-menu active" : "nav-menu"}>
            <NavLink to="/" className="nav-link">
              <li>Home</li>
            </NavLink>
            <NavLink to={"/buy-house"} className="nav-link">
              <li>Buy</li>
            </NavLink>
            <NavLink to={"/sell-house"} className="nav-link">
              <li>Sell</li>
            </NavLink>
            <NavLink to={"/rent-house"} className="nav-link">
              <li>Rent</li>
            </NavLink>
            <NavLink to={"/how-to-sell"} className="nav-link">
              <li>Guides</li>
            </NavLink>
          </ul>
        </div>
        <div className="mobile-menu" onClick={handleToggle}>
          {toggle ? (
            <FaTimes style={{ color: "white", cursor: "pointer" }} size={22} />
          ) : (
            <FaBars style={{ color: "white", cursor: "pointer" }} size={22} />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
