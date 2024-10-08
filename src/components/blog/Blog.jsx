import React from "react";
import img from "../../assets/youtebe.png";

import "./blog.scss";

const Blog = () => {
  return (
    <div className="blog container">
      <div className="blog__card">
        <div className="blog__left">
          <h3 className="blog__left__title">Мочевой будильник </h3>
          <p className="blog__left__text">
            Энурезный или мочевой будильник- это устройство, которое позволит
            избавиться от энуреза без медикаментов и неприятных процедур.
          </p>
          <p className="blog__left__text">
            Будильник состоит из датчика, чувствительного к влаге, который
            встроенным зажимом крепится на трусиках и гибким проводом
            соединяется с блоком сигнализации, закрепленным эластичной лентой на
            руке ребенка.
          </p>
          <p className="blog__left__text">
            При попадании первой капли жидкости на белье, энурезный будильник
            срабатывает и звуковым, световым и вибросигналом будит маленького
            соню. Ребенок перестает мочиться в кровать, отключает будильник и
            заканчивает мочеиспускание в туалете.  Со временем вырабатывается
            стойкий рефлекс- просыпаться при первых позывах к мочеиспусканию.
            Проблема ночного энуреза уходит навсегда!
          </p>
        </div>

        <div className="blog__right">
          <p className="blog__right__text">
            Обзор нашего энурезного будильника MoDo-king MA-108 Доктором
            Комаровским
          </p>
          <img src={img} alt="" />
          <button className="blog__right__btn">
            часто задаваемые вопросы{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
