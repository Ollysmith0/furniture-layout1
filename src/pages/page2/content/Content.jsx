import React from "react";
import "./Content.scss";

const Content = () => {
  return (
    <div className="container">
      <div className="content">
        <h1 className="title">We are available all across the globe</h1>
        <p className="para">
          With stores all over the world, it's easy for you to find furniture
          for your home or place of business. Locally, we’re in most major
          cities throughout the country. Find the branch nearest you using our
          store locator. Any questions? Don't hesitate to contact us today.
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
