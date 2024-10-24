import React from "react";
import img from "../../assets/wishlist.webp";
import "./emptyWishlist.scss";
import { NavLink } from "react-router-dom";

const EmptyWishlist = () => {
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

export default EmptyWishlist;
