import { useCallback, useEffect, useState } from "react";
import { allProducts } from "../api/url";

export default function useScroll(
 
  setProducts,
  categoryFilter,
  pageNum,
  setPageNum
) {
  const [isScrolling, setIsScrolling] = useState(false);

  const fetchData = useCallback(() => {
    if (isScrolling === true) return;
    setIsScrolling(true);
    allProducts(categoryFilter, pageNum)
      .then((res) => {
        if (res) setIsScrolling(false);
        setProducts((prevProducts) => [...prevProducts, ...res.products]);
      })
      .catch((error) => {
        console.error("Error fetching products:", error.message);

        if (error.message.includes("Too many requests")) {
          console.error("Please wait before making more requests.");
        }

        setIsScrolling(false);
      });

    setPageNum((prev) => prev + 1);
  }, [pageNum, isScrolling]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      if (scrollTop + clientHeight >= scrollHeight - 20) {
        fetchData();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchData]);

  return {
    isScrolling,
  };
}
