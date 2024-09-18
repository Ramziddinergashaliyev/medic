import React from "react";
import "./product.scss";
import { Link } from "react-router-dom";

const Product = ({ el }) => {
  return (
    <div className="product__card">
      <Link to={`/single/${el?._id}`}>
        <div className="product__card__img">
          <img src={el?.urls?.[0]} alt="" />
        </div>
      </Link>
      <div className="product__card__info">
        <h3 className="product__card__info-title">{el?.title}</h3>
        <div className="product__card__info-btns">
          <h3 className="product__card__info-text">${el?.price}</h3>
          <button>купить</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
