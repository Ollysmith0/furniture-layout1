import React from "react";
import "../footer/Footer.scss";
import aboutDark from "../../../asset/images/image-about-dark.jpg";
import aboutLight from "../../../asset/images/image-about-light.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="banner1">
        <img src={aboutDark} alt="darkTheme" />
        <div className="overlay1"></div>
      </div>
      <div className="producing">
        <div className="content">
          <h1 className="title">about our furniture</h1>
          <p className="para">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.{" "}
          </p>
        </div>
      </div>
      <div className="banner2">
        <img src={aboutLight} alt="lightTheme" />
        <div className="overlay2"></div>
      </div>
    </div>
  );
};

export default Footer;
