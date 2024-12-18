import React from "react";
import barcodeImg from "../../assets/common_barcode.jpeg";
import ProductProperties from "./ProductProperties";

const ProductDetail = ({ product }) => {
  console.log(product?.product_name);
  return (
    <div className="grow flex flex-col items-start gap-5 ">
      <h1 className="text-2xl font-semibold xl:text-5xl xl:font-normal capitalize">
        {product?.product_name}-{product?.brands_tags[0]}-
        <span className="lowercase">{product?.quantity}</span>
      </h1>
      <div className="flex justify-between gap-2">
        <div className="flex flex-col">
          <p>Barcode:</p>
          <p>{product?.id}</p>
        </div>
        <img
          className="xl:w-44 xl:h-16 w-32 h-10 hidden sm:block"
          src={barcodeImg}
        />
      </div>
      <ProductProperties property={"Quantity"} value={product?.quantity} />
      <ProductProperties
        property={"Packaging"}
        isArr={product?.packaging_tags}
      />
      <ProductProperties
        property={"Categories"}
        isArr={product?.categories_tags}
      />
      <ProductProperties property={"Brands"} isArr={product?.brands_tags} />
      <ProductProperties
        property={"Categories"}
        isArr={product?.categories_tags}
      />
      <ProductProperties property={"Labels"} isArr={product?.labels_tags} />
      <ProductProperties property={"Stores"} isArr={product?.stores_tags} />
      <ProductProperties
        property={"Countries where sold"}
        value={product?.countries}
      />
    </div>
  );
};

export default ProductDetail;
