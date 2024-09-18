import React from "react";
import img from "../../../assets/footer.png";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__card container">
        <div className="footer__img">
          <img src={img} alt="" />
        </div>
        <ul className="footer__list">
          <li className="footer__item">Каталог</li>
          <li className="footer__item">Гарантия</li>
          <li className="footer__item">Оплата и доставка</li>
          <li className="footer__item">Отзывы</li>
          <li className="footer__item">Акции</li>
          <li className="footer__item">О нас</li>
          <li className="footer__item">Контакты</li>
          <li className="footer__item">+380 66 417 95 83</li>
          <li className="footer__item">вверх</li>
        </ul>
      </div>
      <div className="footer__bottom">
        <p>All rights reserved © 2021, Uromedservice</p>
      </div>
    </footer>
  );
};

export default Footer;
