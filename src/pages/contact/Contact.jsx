import React from "react";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

import img from "../../assets/covid.png";

import "./contact.scss";
import Massage from "../../components/massage/Massage";
import img1 from "../../assets/kontact.png";

const Contact = () => {
  return (
    <>
      <div className="contact container">
        <div className="contact__top">
          <h2 className="contact__top__title">Контакты</h2>
          <div className="contact__top__card">
            <div className="contact__top__card__img">
              <img src={img} alt="" />
            </div>
            <div className="contact__top__card__info">
              <p>
                В связи с распространением коронавирусной инфекции COVID-19
                магазин переведен на удаленную работу.
              </p>
              <span>Все заказы принимаются online и по телефону!</span>
            </div>
          </div>
          <div></div>
        </div>

        <div className="contact__info">
          <div className="contact__info__box">
            <a
              className="contact__info__box-link"
              href="tel: +380 66 417 95 83"
            >
              <FaPhoneAlt /> +380 66 417 95 83
            </a>
          </div>
          <div className="contact__info__box">
            <a
              className="contact__info__box-link"
              href="email: uromed@gmail.com"
            >
              <MdEmail /> uromed@gmail.com
            </a>
          </div>
          <div className="contact__info__box">
            <a className="contact__info__box-link" href="#">
              <IoLocationSharp /> Украина, г. Днепр, ул. Челюскина 12
            </a>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
        <Massage />
      </div>
      <div className="map container">
        <div className="map__left">
          <iframe
            className="map__left__card"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d53221.951669019785!2d69.25010580219075!3d41.27424465649568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1726033008665!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="map__right">
          <img src={img1} alt="" />
        </div>
      </div>
    </>
  );
};

export default Contact;
