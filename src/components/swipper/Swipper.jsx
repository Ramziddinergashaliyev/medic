import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import { LuArrowUpSquare } from "react-icons/lu";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import "./swipper.scss";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Swipper() {
  return (
    <div className="container swipper">
      <h2 className="swipper__title">Отзывы наших клиентов</h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          920: {
            slidesPerView: 3,
            spaceBetween: 20,
          },

          1440: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="swipper__cards">
          <SwiperSlide className="swipper__card">
            <div className="swipper__card__top">
              <h3 className="swipper__card__top__title">Татьяна Самойленко</h3>
              <span className="swipper__card__top__text">06.03.2021</span>
            </div>
            <div className="swipper__card-star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="swipper__card__text">
              Спасибо вам большое за такое устройство,мы уже спим без клеёнки,но
              пока ещё с будильником,дочка ещё не готова его снимать говорит что
              для подстраховки,но я рада что рискнула и заказала будильник у нас
              он прозвенел..
            </p>
            <h3 className="swipper__card__arrow">
              развернуть
              <LuArrowUpSquare />
            </h3>
          </SwiperSlide>
          <SwiperSlide className="swipper__card">
            <div className="swipper__card__top">
              <h3 className="swipper__card__top__title">Татьяна Самойленко</h3>
              <span className="swipper__card__top__text">06.03.2021</span>
            </div>
            <div className="swipper__card-star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="swipper__card__text">
              Спасибо вам большое за такое устройство,мы уже спим без клеёнки,но
              пока ещё с будильником,дочка ещё не готова его снимать говорит что
              для подстраховки,но я рада что рискнула и заказала будильник у нас
              он прозвенел..
            </p>
            <h3 className="swipper__card__arrow">
              развернуть
              <LuArrowUpSquare />
            </h3>
          </SwiperSlide>
          <SwiperSlide className="swipper__card">
            <div className="swipper__card__top">
              <h3 className="swipper__card__top__title">Татьяна Самойленко</h3>
              <span className="swipper__card__top__text">06.03.2021</span>
            </div>
            <div className="swipper__card-star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="swipper__card__text">
              Спасибо вам большое за такое устройство,мы уже спим без клеёнки,но
              пока ещё с будильником,дочка ещё не готова его снимать говорит что
              для подстраховки,но я рада что рискнула и заказала будильник у нас
              он прозвенел..
            </p>
            <h3 className="swipper__card__arrow">
              развернуть
              <LuArrowUpSquare />
            </h3>
          </SwiperSlide>
          <SwiperSlide className="swipper__card">
            <div className="swipper__card__top">
              <h3 className="swipper__card__top__title">Татьяна Самойленко</h3>
              <span className="swipper__card__top__text">06.03.2021</span>
            </div>
            <div className="swipper__card-star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="swipper__card__text">
              Спасибо вам большое за такое устройство,мы уже спим без клеёнки,но
              пока ещё с будильником,дочка ещё не готова его снимать говорит что
              для подстраховки,но я рада что рискнула и заказала будильник у нас
              он прозвенел..
            </p>
            <h3 className="swipper__card__arrow">
              развернуть
              <LuArrowUpSquare />
            </h3>
          </SwiperSlide>
          <SwiperSlide className="swipper__card">
            <div className="swipper__card__top">
              <h3 className="swipper__card__top__title">Татьяна Самойленко</h3>
              <span className="swipper__card__top__text">06.03.2021</span>
            </div>
            <div className="swipper__card-star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="swipper__card__text">
              Спасибо вам большое за такое устройство,мы уже спим без клеёнки,но
              пока ещё с будильником,дочка ещё не готова его снимать говорит что
              для подстраховки,но я рада что рискнула и заказала будильник у нас
              он прозвенел..
            </p>
            <h3 className="swipper__card__arrow">
              развернуть
              <LuArrowUpSquare />
            </h3>
          </SwiperSlide>
          <SwiperSlide className="swipper__card">
            <div className="swipper__card__top">
              <h3 className="swipper__card__top__title">Татьяна Самойленко</h3>
              <span className="swipper__card__top__text">06.03.2021</span>
            </div>
            <div className="swipper__card-star">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="swipper__card__text">
              Спасибо вам большое за такое устройство,мы уже спим без клеёнки,но
              пока ещё с будильником,дочка ещё не готова его снимать говорит что
              для подстраховки,но я рада что рискнула и заказала будильник у нас
              он прозвенел..
            </p>
            <h3 className="swipper__card__arrow">
              развернуть
              <LuArrowUpSquare />
            </h3>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
}
