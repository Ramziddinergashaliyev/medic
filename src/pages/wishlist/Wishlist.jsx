import React from "react";
import { useSelector } from "react-redux";
import Products from "../../components/products/Products";
import EmptyWishlist from "../../components/wishlist-empty/EmptyWishlist";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.value);
  console.log(wishlist);
  return (
    <>
      {wishlist ? (
        <EmptyWishlist />
      ) : (
        <div>
          <Products data={wishlist} />
        </div>
      )}
    </>
  );
};

export default Wishlist;
