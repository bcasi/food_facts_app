import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductByBarcode } from "../../api/url";
import ProductDetail from "./ProductDetail";
import ProductImgDetail from "./ProductImgDetail";
import Container from "../common/Container";
import ProductHealth from "./ProductHealth";
import ProductContentSkelton from "./ProductContentSkelton";
import ProductHealthSection from "./ProductHealthSection";
import Loading from "../ui/Loading";

const Product = ({ product }) => {
  /**
   * Product image
Full list of ingredients
Nutritional values (energy, fat, carbs, proteins, etc.)
Labels (vegan, gluten-free, etc.)

   */

  return (
    <Container>
      <ProductContentSkelton>
        <ProductImgDetail data={product} />
      </ProductContentSkelton>
      <ProductContentSkelton>
        <ProductHealthSection data={product} />
      </ProductContentSkelton>
    </Container>
  );
};

export default Product;
