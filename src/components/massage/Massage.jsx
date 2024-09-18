import React from "react";

import img from "../../assets/tg.png";
import img1 from "../../assets/wt.png";

import "./massage.scss";

const Massage = () => {
  return (
    <div className="massage container">
      <div className="massage__card">
        <h2 className="massage__title">Консультация специалиста по телефону</h2>
        <form action="" className="massage__form">
          <input
            className="massage__input"
            placeholder="Ваше имя"
            type="text"
          />
          <input
            className="massage__input"
            placeholder="Ваш телефон*"
            type="text"
          />
          <button className="massage__button">позвоните мне</button>
        </form>
        <p className="massage__text">
          задайте вопрос в удобном для Вас мессенджере:
        </p>
        <div className="massage__icons">
          <img src={img} alt="Telegram" />
          <img src={img1} alt="Viber" />
        </div>
      </div>
    </div>
  );
};

export default Massage;
