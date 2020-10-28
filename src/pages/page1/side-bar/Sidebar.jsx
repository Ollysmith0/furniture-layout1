import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import imageDesktop from "../../../asset/images/desktop-image-hero-1.jpg";
import menuBtn from "../../../asset/images/icon-hamburger.svg";

import "../side-bar/Sidebar.scss";

const Sidebar = () => {
  useEffect(() => {
    document.getElementById("menu-btn").onclick = () => {
      document.getElementById("nav-menu").classList.add("list-m");
    };
    document.getElementById("close-btn").onclick = () => {
      document.getElementById("nav-menu").classList.remove("list-m");
    };
  });
  return (
    <div className="left1">
      <div className="sidebar1">
        <img src={imageDesktop} alt="imageDesktop" className="imageDesktop1" />
        <div className="overlay"></div>
        <div className="navigation">
          <div className="navigation-items">
            <div className="left-arrow">
              <div className="leftNav"></div>
            </div>
            <div className="right-arrow">
              <div className="rightNav"></div>
            </div>
          </div>
        </div>
        <div className="menu">
          <img
            src={menuBtn}
            alt="menu-btn"
            className="menu-btn"
            id="menu-btn"
          />
          <h3 className="room-m">room</h3>
          <ul className="list" id="nav-menu">
            <li className="room" id="close-btn">
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
