import React from "react";
import { Fragment } from "react";
// import banner1 from "../../public/assets/images/banner/homePage.png";

const HomePageBanner = () => {
  return (
    <Fragment>
      <div className="w-100 h-75">
        <img
          src="assets/images/banner/homePage.png"
          alt="homePageBanner"
          className="w-100 h-100"
        />
      </div>
    </Fragment>
  );
};

export default HomePageBanner;
