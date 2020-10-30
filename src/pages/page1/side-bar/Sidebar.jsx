import React from "react";

import "../side-bar/Sidebar.scss";

import openMenu from "../../../js/openMenu";
import closeMenu from "../../../js/closeMenu";
import carousel from "../../../js/carousel";

const Sidebar = () => {
  return (
    <div className="left1" id="side-bar">
      <div className="sidebar1">
        <img
          src="/images/desktop-image-hero-2.jpg"
          alt="imageDesktop"
          className="imageDesktop2"
          id="imageDesktop2"
        />
        <img
          src="/images/desktop-image-hero-3.jpg"
          alt="imageDesktop"
          className="imageDesktop3"
          id="imageDesktop3"
        />
        <img
          src="/images/desktop-image-hero-1.jpg"
          alt="imageDesktop"
          className="imageDesktop1"
          id="imageDesktop1"
        />
        <div className="overlay"></div>
        <div className="navigation">
          <div className="navigation-items">
            <div className="left-arrow" id="back" onClick={(e) => carousel(e)}>
              <div className="leftNav"></div>
            </div>
            <div className="right-arrow" id="next" onClick={(e) => carousel(e)}>
              <div className="rightNav"></div>
            </div>
          </div>
        </div>
        <div className="menu" id="menu">
          <img
            src="/images/icon-hamburger.svg"
            alt="menu-btn"
            className="menu-btn"
            id="menu-btn"
            onClick={openMenu}
          />
          <h3 className="room-m">room</h3>
          <ul className="list" id="nav-menu">
            <li className="room" id="close-btn" onClick={closeMenu}>
              <a href="/#">room</a>
            </li>
            <li className="item">
              <a to="/page2">home</a>
            </li>
            <li className="item">
              <a to="/page3">shop</a>
            </li>
            <li className="item">
              <a href="/#">about</a>
            </li>
            <li className="item">
              <a href="/#">contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
