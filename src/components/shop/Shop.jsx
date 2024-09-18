import React from "react";
import img from "../../assets/shop.png";
import img1 from "../../assets/shop1.png";
import img2 from "../../assets/shop2.png";
import { IoMdArrowDropright } from "react-icons/io";

import "./shop.scss";

const Shop = () => {
  return (
    <div className="shop container">
      <div className="shop__left">
        <h2 className="shop__left__title">ИНТЕРНЕТ-МАГАЗИН UROMED SERVICE</h2>
        <p className="shop__left__text">
          UroMed Service - это функциональный и современный сервис, позволяющий
          быстро и легко приобрести товары медицинской оптики.
        </p>
        <p className="shop__left__text">
          У компании 15-ти летний опыт в сфере предоставления высококачественных
          услуг по подбору и продаже оптимальных средств для коррекции зрения:
        </p>
        <p className="shop__left__text">
          • сеть салонов розничной оптики; <br /> • собственные мастерские по
          изготовлению очков; <br /> • высококвалифицированные и опытные
          специалисты; <br /> • надежные и проверенные поставщики; <br /> •
          функциональный и современный сервис онлайн продаж.
        </p>
      </div>
      <div className="shop__right">
        <div className="shop__right__top">
          <h2>
            Полезные материалы <IoMdArrowDropright />
          </h2>
        </div>
        <div className="shop__right__card">
          <div className="shop__right__card__img">
            <img src={img} alt="" />
          </div>
          <div className="shop__right__card__info">
            <h3>8 шагов по борьбе с энурезом. Советы родителям</h3>
            <p>
              Предлагаем вашему вниманию перевод статьи Министерства
              здравоохранения Австралии, посвященную проблеме детского и
              подросткового энуреза..
            </p>
            <div className="shop__right__card__btn">
              <button>
                читать <IoMdArrowDropright />
              </button>
            </div>
          </div>
        </div>
        <div className="shop__right__card">
          <div className="shop__right__card__img">
            <img src={img1} alt="" />
          </div>
          <div className="shop__right__card__info">
            <h3>Энурезный будильник. Как это работает</h3>
            <p>
              Энурезная сигнализация- это устройство, которое пробуждает
              ребенка, который мочится в постель. Мочевой будильник состоит из
              закрепленного на белье..
            </p>
            <div className="shop__right__card__btn">
              <button>
                читать <IoMdArrowDropright />
              </button>
            </div>
          </div>
        </div>
        <div className="shop__right__card">
          <div className="shop__right__card__img">
            <img src={img2} alt="" />
          </div>
          <div className="shop__right__card__info">
            <h3>Энурезный будильник. Как выбрать лучший вариант</h3>
            <p>
              Как выбрать энурезный будильник, на что следует обращать внимание,
              какому прибору отдать предпочтение, чтобы мочевой будильник был
              эффективным средством..
            </p>
            <div className="shop__right__card__btn">
              <button>
                читать <IoMdArrowDropright />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
