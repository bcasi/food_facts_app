import React from "react";
import ProductsList from "./ProductsList";
import Container from "../common/Container";

const ProductsLayout = ({ loading, products }) => {
  return (
    <Container>
      <ProductsList loading={loading} products={products} />
    </Container>
  );
};

export default ProductsLayout;
