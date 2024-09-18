import React, { useState } from "react";
import img from "../../../assets/logo.png";
import { FaShoppingBasket } from "react-icons/fa";
import { MdLocalPhone } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { LuMenu } from "react-icons/lu";

import { IoMdClose } from "react-icons/io";
import "./header.scss";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="header__top">
        <p className="header__top__title">Доставка в любой город Украины</p>
      </div>
      <header className="header">
        <nav className="header__nav container">
          <div className="header__logo__top">
            <img src={img} alt="" />
          </div>
          <div className="header__menu">
            <ul className="header__menu__top">
              <li className="header__menu__top-item">
                <MdLocalPhone />
                <span>+380 66 417 95 83</span>
              </li>
              <li className="header__menu__top-item">Обратный звонок</li>
              <li className="header__menu__top-item header__menu__top-watch">
                <MdOutlineWatchLater />
                ПН-ПТ: 10-19
              </li>
              <li className="header__menu__top-item">
                • СЕЙЧАС НА САЙТЕ: 23 ПОКУПАТЕЛЯ
              </li>
              <select name="" id="">
                <option value="Uzb">Uzb</option>
                <option value="Rus">Rus</option>
              </select>
            </ul>
            <ul
              className={`header__menu__bottom ${
                show ? "header__menu__botttom-hide" : ""
              }`}
            >
              <NavLink to={"/catolog"} className="header__menu__bottom-item">
                Каталог
              </NavLink>
              <NavLink to={"/warranty"} className="header__menu__bottom-item">
                Гарантия
              </NavLink>
              <NavLink to={"/"} className="header__menu__bottom-item">
                Оплата и доставка
              </NavLink>
              <NavLink to={"/feedback"} className="header__menu__bottom-item">
                Отзывы
              </NavLink>
              <NavLink to={"/sale"} className="header__menu__bottom-item">
                Акции 2
              </NavLink>
              <NavLink to={"/article"} className="header__menu__bottom-item">
                статьи
              </NavLink>
              <NavLink to={"/about"} className="header__menu__bottom-item">
                О нас{" "}
              </NavLink>
              <NavLink to={"/contact"} className="header__menu__bottom-item">
                Контакты
              </NavLink>
            </ul>
          </div>
          <div className="header__logo__bottom">
            <FaShoppingBasket />
            {show ? (
              <button
                onClick={() => setShow(false)}
                className="header__menu__bottom-btn"
              >
                <IoMdClose />
              </button>
            ) : (
              <button
                onClick={() => setShow(true)}
                className="header__logo__bottom-menu"
              >
                <LuMenu />
              </button>
            )}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
