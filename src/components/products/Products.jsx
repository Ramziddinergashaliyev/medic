import React from "react";
import Product from "../product/Product";

import "./products.scss";
import Loading from "../loading/Loading";

const Products = ({ data, limit }) => {
  return (
    <>
      {!data ? (
        <Loading />
      ) : (
        <>
          <div className="product container">
            <div className="product__cards">
              {data?.slice(0, limit)?.map((el) => (
                <Product key={el?._id} el={el} />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Products;
