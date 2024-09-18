import React from "react";
import img from "../../assets/hero.png";
import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container hero__card">
        <div className="hero__left">
          <h1 className="hero__left__title">Энурузный будильник</h1>
          <p className="hero__left__text">эффективное средство при энурезе</p>
        </div>
        <div className="hero__right">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
