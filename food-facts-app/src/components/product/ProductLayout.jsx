import React from "react";
import HeaderLayout from "../header/HeaderLayout";
import Main from "../common/Main";
import { useParams } from "react-router";
import Product from "./Product";

const ProductLayout = () => {
  const { id } = useParams();
  return (
    <div className="m-0 p-0 flex flex-col relative">
      <HeaderLayout />
      <Main>
        <Product />
      </Main>
    </div>
  );
};

export default ProductLayout;
