import React from "react";
import { NavLink } from "react-router-dom";
import imageDesktop from "../../../asset/images/desktop-image-hero-1.jpg";
import "../side-bar/Sidebar.scss";

const Sidebar = () => {
  return (
    <div className="left1">
      <div className="sidebar1">
        <img src={imageDesktop} alt="imageDesktop" className="imageDesktop1" />
        <div className="overlay"></div>
        <div className="menu">
          <ul className="list">
            <li className="room">
              <a href="#">room</a>
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
