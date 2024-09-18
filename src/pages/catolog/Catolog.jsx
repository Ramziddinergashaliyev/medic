import React from "react";
import { useGetProductsQuery } from "../../context/api/productApi";
import Products from "../../components/products/Products";
import { ARTICL } from "../../static";
import { MdOutlineArrowRight } from "react-icons/md";

import "./catolog.scss";
import { NavLink } from "react-router-dom";

const Catolog = () => {
  const { data } = useGetProductsQuery();
  let limit = 8;

  const catologData = ARTICL?.slice(0, 4)?.map((el) => (
    <div key={el?.id} className="catolog__card">
      <div className="catolog__card__img">
        <img src={el?.img} alt="" />
      </div>
      <div className="catolog__card__info">
        <h3 className="catolog__card__info-title">{el?.title}</h3>
        <p className="catolog__card__info-text">{el?.desc}</p>
        <div className="catolog__card__info-link">
          <p>
            читать
            <MdOutlineArrowRight />
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div className="catolog__top container">
        <h2 className="catolog__top__title">Энурезные будильники</h2>
        <div className="catolog__top__select">
          <h2>Сортировать:</h2>
          <select name="" id="">
            <option value="select1">select1</option>
            <option value="select2">select2</option>
            <option value="select3">select3</option>
            <option value="select4">select4</option>
          </select>
        </div>
      </div>
      <div>
        <Products data={data?.payload} limit={limit} />
      </div>
      <div className="catolog container">
        <h2 className="catolog__title">Статьи по теме</h2>
        <div className="catolog__cards">{catologData}</div>
        <div className="catolog__cards__link">
          <NavLink to={"/article"} className={"catolog__cards__link-item"}>
            смотреть все статьи <MdOutlineArrowRight />
          </NavLink>
        </div>
      </div>
      <div className="catolog__info container">
        <h2 className="catolog__info__title">Блок для SEO текста</h2>
        <p className="catolog__info__desc">
          Для комфортного использования техники целесообразно купить защитные
          очки для работы за компьютером. Сделать это рекомендуется людям,
          проводящим за монитором много часов, вне зависимости от остроты
          зрения. Очки для компьютера повышают четкость изображения, убирают
          блики, нейтрализуют эффект мерцания монитора. Линзы с диоптриями
          обеспечивают необходимую коррекцию. <br />
          Интернет-магазин «Крот шоп» предлагает разнообразную оптическую
          продукцию.Зная состояние своего зрения, подобрать необходимую модель
          несложно.
        </p>
        <h3 className="catolog__info__text">Это временный текст</h3>
        <p className="catolog__info__desc">
          Использование неподходящих линз при постоянном взаимодействии с
          монитором может усугубить проблемы со здоровьем глаз. Выбирать
          специальные очки для работы за компьютером стоит после консультации с
          офтальмологом.
          <br />В продаже имеются разнообразные модели таких очков:
        </p>
        <p className="catolog__info__desc">
          с покрытием, поглощающим электромагнитные волны;
          <br />с антирефлексным слоем, эффективно снижающим степень отражения.{" "}
          <br />
          На всю продукцию предоставляются сертификаты качества.
        </p>
        <h3 className="catolog__info__text">Пример подзаголовка</h3>
        <p className="catolog__info__desc">
          Одним из плюсов заказа компьютерных очков на сайте интернет-магазина
          Крот.Шоп является удобная и бережная доставка. Мы доставляем наши
          товары по всей России, как в крупные города, такие как: Москва,
          Санкт-Петербург, Новосибирск, Екатеринбург, Нижний Новгород, Казань,
          так и в любой город, где есть пункт выдачи одной из наших транспортных
          компаний или Почты России. Заказав у нас очки для компьютера Вы можете
          быть уверены, что мы тщательно упакуем вашу покупку и в кратчайшие
          сроки передадим ее транспортной компании. Быстрая и бережная доставка
          – важная составляющая часть нашей работы.
        </p>
      </div>
    </>
  );
};

export default Catolog;
