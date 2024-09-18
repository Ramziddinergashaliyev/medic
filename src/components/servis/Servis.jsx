import React from "react";
import img from "../../assets/icons.png";
import img1 from "../../assets/icons1.png";
import img2 from "../../assets/icons2.png";
import img3 from "../../assets/icons3.png";
import img4 from "../../assets/icons4.png";
import img5 from "../../assets/icons5.png";

import "./servis.scss";

const Servis = () => {
  return (
    <div className="servis container">
      <div className="servis__info">
        <img src={img} alt="" />
        <p>Самый широкий ассортимент энурезных будильников</p>
      </div>
      <div className="servis__info">
        <img src={img1} alt="" />
        <p>Только оригинальная продукция</p>
      </div>
      <div className="servis__info">
        <img src={img2} alt="" />
        <p>Официальные представители Teqin и MoDo-king</p>
      </div>
      <div className="servis__info">
        <img src={img3} alt="" />
        <p>Профессиональная консультация специалиста</p>
      </div>
      <div className="servis__info">
        <img src={img4} alt="" />
        <p>Гарантийное и послегарантийное обслуживание</p>
      </div>
      <div className="servis__info">
        <img src={img5} alt="" />
        <p>Удобная и быстрая оплата и доставка товара</p>
      </div>
    </div>
  );
};

export default Servis;
