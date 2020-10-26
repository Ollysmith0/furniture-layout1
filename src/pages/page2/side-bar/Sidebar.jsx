import React from "react";
import { NavLink } from "react-router-dom";

import "../side-bar/Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="left">
      <div className="sidebar2">
        <div className="overlay"></div>
        <div className="menu">
          <ul className="list">
            <li className="room">
              <NavLink to="/">room</NavLink>
            </li>
            <li className="item">
              <NavLink to="/page2">home</NavLink>
            </li>
            <li className="item">
              <NavLink to="/page3">shop</NavLink>
            </li>
            <li className="item">
              <a href="#">about</a>
            </li>
            <li className="item">
              <a href="#">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
