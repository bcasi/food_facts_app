import { useEffect, useState } from "react";
import { categories } from "../utils/constants";
import { allProducts } from "../api/url";

export default function useCategory() {
  const [loading, setLoading] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState(categories?.[0].value);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (loading) return;
    setLoading(true);

    allProducts(categoryFilter, 20).then((res) => {
      if (res) setLoading(false);
      setProducts(res.products);
      console.log(res.products);
    });
  }, [categoryFilter]);

  return {
    loading,
    setLoading,
    categoryFilter,
    setCategoryFilter,
    products,
    setProducts,
  };
}
