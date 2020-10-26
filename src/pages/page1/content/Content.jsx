import React from "react";
import "./Content.scss";

const Content = () => {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">Discover innovative ways to decorate</h1>
        <p className="para">
          We provide unmatched quality, comfort, and style for property owners
          across the country. Our experts combine form and function in bringing
          your vision to life. Create a room in your own style with our
          collection and make your property a reflection of you and what you
          love.
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
