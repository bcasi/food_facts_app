import React, { useEffect, useState } from "react";
import { allProducts } from "../../api/url";
import ProductsCard from "./ProductsCard";
import Loading from "../ui/Loading";

const ProductsList = ({ loading, products }) => {
  return (
    <div className="w-full h-full">
      {loading && (
        <div className="mt-5 flex justify-center items-center h-full">
          <Loading />
        </div>
      )}
      <ul className="flex flex-wrap justify-center items-center gap-5 w-full p-0 ">
        {products?.length > 0 &&
          products?.map((item) => <ProductsCard key={item._id} data={item} />)}
      </ul>
    </div>
  );
};

export default ProductsList;
