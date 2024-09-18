import React from "react";
import { useGetProductsQuery } from "../../context/api/productApi";
import Products from "../products/Products";

const ProductInfo = () => {
  const { data } = useGetProductsQuery();
  let limit = 8;
  return (
    <div>
      <Products data={data?.payload} limit={limit} />
    </div>
  );
};

export default ProductInfo;
