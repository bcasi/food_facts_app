import { useEffect, useState } from "react";
import { categories } from "../utils/constants";
import { allProducts } from "../api/url";

export default function useCategory() {
  const [loading, setLoading] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState(categories?.[0].value);
  const [products, setProducts] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    if (loading) return;
    setLoading(true);
    setPageNum((prev) => prev !== 1 && 1);
    allProducts(categoryFilter, 1).then((res) => {
      if (res) setLoading(false);
      setProducts(res.products);
      console.log(res.products);
    });
    setPageNum(2);
  }, [categoryFilter]);

  return {
    loading,
    setLoading,
    categoryFilter,
    setCategoryFilter,
    products,
    setProducts,
    pageNum,
    setPageNum,
  };
}
