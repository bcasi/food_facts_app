import React from "react";
import ProductDetail from "./ProductDetail";

const ProductImgDetail = ({ data }) => {
  const { product } = data;
  return (
    <>
      <img
        className="md:w-64 md:h-80  lg:w-80 lg:h-96  rounded-xl"
        loading="lazy"
        src={
          product?.image_url ||
          product?.image_thumb_url ||
          product?.image_front_url
        }
      />
      <ProductDetail product={product} />
    </>
  );
};

export default ProductImgDetail;
