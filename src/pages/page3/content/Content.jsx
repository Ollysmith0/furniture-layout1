import React from "react";
import "./Content.scss";

const Content = () => {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Manufactured with the best materials</h1>
        <p className="para">
          Our modern furniture store provide a high level of quality. Our
          company has invested in advanced technology to ensure that every
          product is made as perfect and as consistent as possible. With three
          decades of experience in this industry, we understand what customers
          want for their home and office.
        </p>
        <a href="#" className="shop-now">
          shop now
        </a>
        <div className="rightArrow"></div>
      </div>
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
    </div>
  );
};

export default Content;
