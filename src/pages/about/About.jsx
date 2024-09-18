import React from "react";
import img from "../../assets/onas.png";
import img1 from "../../assets/onas1.png";
import img2 from "../../assets/onas2.png";
import img3 from "../../assets/onas3.png";
import sertificate from "../../assets/ser.png";

import "./about.scss";
import { ABOUT } from "../../static";

const About = () => {
  const aboutCard = ABOUT?.map((el) => (
    <div key={el?.id} className="about__bottom__card">
      <div className="about__bottom__card__top">
        <img src={el?.img} alt="" />
        <h3>{el?.title}</h3>
      </div>
      <p>{el?.desc}</p>
    </div>
  ));

  return (
    <div className="about container">
      <div className="about__top__img">
        <img src={img} alt="" />
      </div>
      <div className="about__card">
        <div className="about__card__left">
          <h3 className="about__card__left-title">Uromedservice</h3>
          <p className="about__card__left-text">
            Компания uromedservice уже более 9 лет профессионально занимается
            импортом и продажей на территории Украины энурезных будильников,
            различных средств ухода и личной гигиены, а так же других
            сопутствующих товаров, в том числе медицинского назначения!{" "}
          </p>
          <p className="about__card__left-text">
            Пройдя свой не малый путь, и досконально изучив всех производителей
            энурезных будильников, плюсов и минусов каждого конкретного
            продукта, мы для себя определили приоритетное сотрудничество с
            такими всемирно известными брендами как Teqin и MoDo-king.
          </p>
          <p className="about__card__left-text">
            В данный момент, на протяжении уже более 5 лет, у нас организованы
            прямые поставки будильников от этих производителей, и наша компания
            является официальным представителем Teqin и MoDo-king в Украине! Что
            позволяет нам гарантировать высочайшее качество и самый широкий
            ассортимент продукции этих брендов на территории Украины,
            профессиональный сервис и обслуживание наших клиентов, а так же
            доступные и адекватные цены!
          </p>
        </div>
        <div className="about__card__right">
          <img src={img1} alt="" />
        </div>
      </div>
      <div className="about__box">
        <div className="about__box__left">
          <img src={img2} alt="" />
        </div>
        <div className="about__box__right">
          <div className="about__box__right-info">
            <p>
              Мы гордимся тем, что наши товары помогли и продолжают помогать
              многим Семьям в решении их деликатных вопросов! Мы постоянно
              учимся чему-то новому и не боимся идти в ногу со временем,
              расширяем наш ассортимент и совершенствуем качество обслуживания!
              Осознаём, как важно для Вас найти надежный сервис по выбору и
              покупке энурезных будильников и других сопутствующих товаров, и
              прилагаем все усилия, что бы стать для Вас именно таким местом.
            </p>
          </div>
          <div className="about__box__right-img">
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
      <div className="about__bottom__cards">{aboutCard}</div>
      <div className="about__imgs">
        <img src={sertificate} alt="" />
      </div>
    </div>
  );
};

export default About;
