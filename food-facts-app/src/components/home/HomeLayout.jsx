import React from "react";
import HeaderLayout from "../header/HeaderLayout";
import FilterLayout from "../filter/FilterLayout";
import ProductsLayout from "../products/ProductsLayout";
import Main from "../common/Main";
import useCategory from "../../hooks/useCategory";
import useSearch from "../../hooks/useSearch";
import useScroll from "../../hooks/useScroll";

const HomeLayout = () => {
  const {
    loading,
    setLoading,
    products,
    setProducts,
    categoryFilter,
    setCategoryFilter,
    pageNum,
    setPageNum,
  } = useCategory();

  const { search, setSearch } = useSearch(setLoading, setProducts);
  const { isScrolling } = useScroll(
    setProducts,
    categoryFilter,
    pageNum,
    setPageNum
  );

  return (
    <div className="m-0 p-0 flex flex-col relative">
      <HeaderLayout search={search} setSearch={setSearch} />
      <Main>
        <FilterLayout
          products={products}
          setProducts={setProducts}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
        />
        <ProductsLayout
          isScrolling={isScrolling}
          loading={loading}
          products={products}
        />
      </Main>
    </div>
  );
};

export default HomeLayout;
