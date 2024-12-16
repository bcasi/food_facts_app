import React, { useEffect, useState } from "react";
import HeaderLayout from "../header/HeaderLayout";
import FilterLayout from "../filter/FilterLayout";
import ProductsLayout from "../products/ProductsLayout";
import Main from "../common/Main";
import {
  allProducts,
  getProductByBarcode,
  searchProductName,
} from "../../api/url";
import { categories, productAndGradeSort } from "../../utils/constants";
import { useNavigate } from "react-router";

const HomeLayout = () => {
  const [search, setSearch] = useState("");
  const [delayedSearch, setDelayedSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState(categories?.[0].value);
  const [sortProductOrNurtiscore, setSortProductAndNutriscore] = useState(
    productAndGradeSort?.[0].value
  );
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    if (categoryFilter !== "") {
      allProducts(categoryFilter, 20).then((res) => {
        if (res) setLoading(false);
        setProducts(res.products);
        console.log(res.products);
      });
    }
  }, [categoryFilter]);

  useEffect(() => {
    const debounceFn = setTimeout(() => {
      if (search !== "") {
        if (isNaN(search)) {
          searchProductName(search).then((searchProducts) => {
            setProducts(searchProducts.products);
          });
        } else {
          navigate(`/product/${search}`);
        }
      }

      setDelayedSearch(search);
    }, 3000);

    return () => clearTimeout(debounceFn);
  }, [search]);

  const handleCategory = (e) => {
    setCategoryFilter(e.target.value);
  };

  const handleSortProductByName = (e) => {
    const selectedVal = JSON.parse(e.target.value);
    const findSort = productAndGradeSort.find(
      (val) =>
        val.value.item === selectedVal.item &&
        val.value.sort === selectedVal.sort
    );

    setSortProductAndNutriscore(findSort.value);

    const sortedProducts = products.sort((a, b) =>
      isProducts(selectedVal, a, b)
    );

    setProducts(sortedProducts);
  };

  /** Sort functionality */
  const isProducts = (val, a, b) => {
    if (val.item === "products") {
      return isProductName(a, b, val.sort);
    } else {
      if (val.sort === "asc") {
        return a.nutriscore_grade.localeCompare(b.nutriscore_grade);
      } else {
        return b.nutriscore_grade.localeCompare(a.nutriscore_grade);
      }
    }
  };

  /**Some products doesn't have product_name */

  const isProductName = (a, b, sort) => {
    if (a.product_name === "") {
      if (sort === "asc") {
        return a.abbreviated_product_name.localeCompare(
          b.abbreviated_product_name
        );
      } else {
        return b.abbreviated_product_name.localeCompare(
          a.abbreviated_product_name
        );
      }
    } else {
      if (sort === "asc") {
        return a.product_name.localeCompare(b.product_name);
      } else {
        return b.product_name.localeCompare(a.product_name);
      }
    }
  };

  return (
    <div className="m-0 p-0 flex flex-col relative">
      <HeaderLayout search={search} setSearch={setSearch} />
      <Main>
        <FilterLayout
          dataSort={productAndGradeSort}
          sortFilter={sortProductOrNurtiscore}
          handleSort={handleSortProductByName}
          dataFilter={categories}
          categoryFilter={categoryFilter}
          handleCategory={handleCategory}
        />
        <ProductsLayout loading={loading} products={products} />
      </Main>
    </div>
  );
};

export default HomeLayout;
