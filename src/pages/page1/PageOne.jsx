import React from "react";
import Sidebar from "../page1/side-bar/Sidebar";
import Content from "../page1/content/Content";
import Footer from "../page1/footer/Footer";

const PageOne = () => {
  return (
    <>
      <div className="page1" id="page1">
        <div className="flex-box flex-box-m">
          <Sidebar />
          <Content />
        </div>
        <Footer />
      </div>
      <div className="overlay2" id="overlay2"></div>
    </>
  );
};

export default PageOne;
