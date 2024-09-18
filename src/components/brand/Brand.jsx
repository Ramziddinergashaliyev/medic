import React from "react";
import "./brand.scss";

import img1 from "../../assets/logo1.png";
import img2 from "../../assets/logo2.png";
import img3 from "../../assets/logo3.png";
import img4 from "../../assets/logo4.png";
import img5 from "../../assets/logo5.png";

const Brand = () => {
  return (
    <div className="brand container">
      <img src={img1} alt="" />
      <img src={img2} alt="" />
      <img src={img3} alt="" />
      <img src={img4} alt="" />
      <img src={img5} alt="" />
    </div>
  );
};

export default Brand;
