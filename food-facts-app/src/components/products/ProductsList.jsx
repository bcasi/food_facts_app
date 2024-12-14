import React, { useEffect, useState } from "react";
import { allProducts, allProducts2 } from "../../api/url";
import ProductsCard from "./ProductsCard";
import Loading from "../ui/Loading";

const ProductsList = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    allProducts2().then((res) => {
      if (res) setLoading(false);
      setProducts(res.products);
    });
  }, []);

  return (
    <div className="w-full h-full">
      {loading && (
        <div className="mt-5 flex justify-center items-center h-full">
          <Loading />
        </div>
      )}
      <ul className="flex flex-wrap justify-center items-center gap-5 w-full p-0 ">
        {products.length > 0 &&
          products.map((item) => <ProductsCard key={item.id} data={item} />)}
      </ul>
    </div>
  );
};

export default ProductsList;
