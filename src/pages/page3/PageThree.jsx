import React from "react";
import Sidebar from "../page3/side-bar/Sidebar";
import Content from "../page3/content/Content";
import Footer from "../page3/footer/Footer";

const PageThree = () => {
  return (
    <div className="page3">
      <div className="flex-box">
        <Sidebar />
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default PageThree;
