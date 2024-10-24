import React from "react";
import "./cart.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  decrementCart,
  incrementCart,
  removeFromCart,
} from "../../context/slices/cartSlice";
import { useGetProductsQuery } from "../../context/api/productApi";
import Products from "../../components/products/Products";
import Massage from "../../components/massage/Massage";
import CartEmpty from "../../components/cartEmpty/CartEmpty";

const Cart = () => {
  const cart = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const { data } = useGetProductsQuery();

  const cartProduct = cart?.map((el) => (
    <ul className="cart__boxs__cards-list">
      <li className="cart__boxs__cards-item-img">
        <img src={el?.urls?.[0]} alt="" />
      </li>
      <li className="cart__boxs__cards-item">
        <h3>{el?.title}</h3>
      </li>
      <li className="cart__boxs__cards-item-price">
        <p>{el?.price}$</p>
      </li>
      <li className="cart__boxs__cards-item-btn">
        <button
          disabled={el?.quantity <= 0}
          onClick={() => dispatch(decrementCart(el))}
        >
          -
        </button>
        <button>{el?.quantity}</button>
        <button onClick={() => dispatch(incrementCart(el))}>+</button>
      </li>
      <li className="cart__boxs__cards-item-price cart__boxs__cards-item-price-end">
        <p>{el?.price}$</p>
      </li>
      <li className="cart__boxs__cards-item-delete">
        <button onClick={() => dispatch(removeFromCart(el?._id))}>X</button>
      </li>
    </ul>
  ));

  return (
    <>
      <div className="cart container">
        <h2 className="cart__title">Корзина</h2>
        {cart.length ? (
          <div className="cart__boxs">
            <h3 className="cart__boxs__title">
              Общая сумма: <span>2 148 ₴</span>{" "}
            </h3>
            <p className="cart__boxs__desc">
              Для продолжения нажмите кнопку "оформить заказ"
            </p>
            <ul className="cart__boxs__list">
              <li className="cart__boxs__item">Фото</li>
              <li className="cart__boxs__item">Наименование</li>
              <li className="cart__boxs__item">Цена</li>
              <li className="cart__boxs__item">Количество:</li>
              <li className="cart__boxs__item cart__boxs__item-end">Сумма</li>
              <li className="cart__boxs__item"></li>
            </ul>
            <div className="cart__boxs__cards">{cartProduct}</div>
          </div>
        ) : (
          <CartEmpty />
        )}
      </div>
      <div>
        <h2 className="cart__product-title">Актуальные товары</h2>
        <Products data={data?.payload} limit={4} />
      </div>
      <div>
        <Massage />
      </div>
    </>
  );
};

export default Cart;
