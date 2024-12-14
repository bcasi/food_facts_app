import React from "react";
import HeaderLayout from "../header/HeaderLayout";
import FilterLayout from "../filter/FilterLayout";
import ProductsLayout from "../products/ProductsLayout";
import Main from "../common/Main";

const HomeLayout = () => {
  return (
    <div className="m-0 p-0 flex flex-col relative">
      <HeaderLayout />
      <Main>
        <FilterLayout />
        <ProductsLayout />
      </Main>
    </div>
  );
};

export default HomeLayout;
