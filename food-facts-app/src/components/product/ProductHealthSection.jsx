import React from "react";
import ProductHealth from "./ProductHealth";

const ProductHealthSection = ({ data }) => {
  const { product } = data;
  return (
    <>
      <ProductHealth product={product} />
      <img
        className="md:w-64 md:h-80  lg:w-80 lg:h-96  rounded-xl"
        src={
          product?.image_nutrition_url ||
          product?.mage_nutrition_thumb_url ||
          product?.image_nutrition_small_url
        }
      />
    </>
  );
};

export default ProductHealthSection;
