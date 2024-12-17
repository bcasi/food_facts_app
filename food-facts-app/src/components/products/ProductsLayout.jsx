import React from "react";
import ProductsList from "./ProductsList";
import Container from "../common/Container";
import Loading from "../ui/Loading";

const ProductsLayout = ({ loading, products }) => {
  return (
    <Container>
      {loading ? (
        <div className="mt-5 flex justify-center items-center h-full">
          <Loading />
        </div>
      ) : (
        <ProductsList loading={loading} products={products} />
      )}
    </Container>
  );
};

export default ProductsLayout;
