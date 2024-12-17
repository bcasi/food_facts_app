import { useEffect, useState } from "react";
import useCategory from "./useCategory";
import { searchProductName } from "../api/url";
import { useNavigate } from "react-router";

export default function useSearch(setLoading, setProducts) {
  const [search, setSearch] = useState("");
  const [delayedSearch, setDelayedSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const debounceFn = setTimeout(() => {
      if (search !== "") {
        setLoading(true);
        if (isNaN(search)) {
          searchProductName(search, signal).then((searchProducts) => {
            setProducts(searchProducts.products);
          });
        } else {
          navigate(`/product/${search}`);
        }
        setLoading(false);
      }

      setDelayedSearch(search);
    }, 3000);

    return () => {
      clearTimeout(debounceFn);
      controller.abort();
    };
  }, [search]);

  return { search, setSearch };
}
