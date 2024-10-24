import React from "react";
import "./product.scss";
import { Link } from "react-router-dom";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { toggleHeart } from "../../context/slices/wishlistSlice";
import { HiMiniHeart } from "react-icons/hi2";
import { addToCart } from "../../context/slices/cartSlice";

const Product = ({ el }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.value);

  return (
    <div className="product__card">
      <div className="product__card__img">
        <div className="product__card__btn">
          <button onClick={() => dispatch(toggleHeart(el))}>
            {wishlist?.some((list) => list._id === el._id) ? (
              <HiMiniHeart color="green" />
            ) : (
              <IoIosHeartEmpty color="black" />
            )}
          </button>
          <button onClick={() => dispatch(addToCart(el))}>
            <BsCart2 />
          </button>
        </div>
        <Link to={`/single/${el?._id}`}>
          <img src={el?.urls?.[0]} alt="" />
        </Link>
      </div>
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
