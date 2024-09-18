import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetProductByIdQuery,
  useGetProductsQuery,
} from "../../context/api/productApi";
import { FaStar } from "react-icons/fa";
import "./detail.scss";
import img from "../../assets/single.png";
import img1 from "../../assets/single1.png";
import img2 from "../../assets/single2.png";
import Products from "../../components/products/Products";
import Massage from "../../components/massage/Massage";
import SingleLoading from "../../components/singleLoading/SingleLoading";

const Detail = () => {
  const { id } = useParams();
  const { data: product } = useGetProductsQuery();
  let limit = 4;

  const { data } = useGetProductByIdQuery(id);
  console.log(data?.payload);

  return (
    <>
      <div className="detail container">
        {!data ? (
          <SingleLoading />
        ) : (
          <div className="detail__card">
            <div className="detail__card__left">
              <div className="detail__card__left-small">
                <img src="" alt="bir" />
                <img src="" alt="ikki" />
                <img src="" alt="uch" />
              </div>
              <div className="detail__card__left-imgs">
                <img src={data?.payload?.urls?.[0]} alt="" />
              </div>
            </div>
            <div className="detail__card__right">
              <h2 className="detail__card__right-title">
                {data?.payload?.title}
              </h2>
              <p className="detail__card__right-desc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id,
                minus consectetur vel dignissimos et cumque dolores voluptatum.
                Incidunt magni fuga obcaecati totam ea, dolores deleniti
                accusantium optio, dicta, tempore eaque!
              </p>
              <h2 className="detail__card__right-price">
                ${data?.payload?.price}
              </h2>
              <div className="detail__card__star">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span>23 отзыва</span>
              </div>
              <div className="detail__card__btn">
                <div className="detail__card__btn-counter">
                  <button>-</button>
                  <button>1</button>
                  <button>+</button>
                </div>
                <button className="detail__card__btn__cart">купить</button>
              </div>

              <div className="detail__card__icons">
                <div className="detail__card__icon">
                  <div className="detail__card__icon-img">
                    <img src={img} alt="" />
                  </div>
                  <div className="detail__card__icon-info">
                    <p>Гарантия качества</p>
                  </div>
                </div>
                <div className="detail__card__icon">
                  <div className="detail__card__icon-img">
                    <img src={img1} alt="" />
                  </div>
                  <div className="detail__card__icon-info">
                    <p>Оперативная доставка</p>
                  </div>
                </div>
                <div className="detail__card__icon">
                  <div className="detail__card__icon-img">
                    <img src={img2} alt="" />
                  </div>
                  <div className="detail__card__icon-info">
                    <p>Все способы оплаты</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <h2 className="detail__card__title-product">Похожие товары</h2>
        <Products data={product?.payload} limit={limit} />
      </div>
      <div>
        <Massage />
      </div>
    </>
  );
};

export default Detail;
