import React from "react";
import "./cartEmpty.scss";
import img from "../../assets/cart.webp";
import { NavLink } from "react-router-dom";

const CartEmpty = () => {
  return (
    <div className="empty container">
      <img src={img} alt="" />
      <p>Sevimlilar topilmadi</p>
      <button>
        <NavLink to={"/"}>Home</NavLink>
      </button>
    </div>
  );
};

export default CartEmpty;
