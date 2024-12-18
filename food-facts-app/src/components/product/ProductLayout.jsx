import React, { useEffect, useState } from "react";
import HeaderLayout from "../header/HeaderLayout";
import Main from "../common/Main";
import { useParams } from "react-router";
import Product from "./Product";
import Container from "../common/Container";
import { getProductByBarcode } from "../../api/url";
import Loading from "../ui/Loading";

const ProductLayout = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    getProductByBarcode(id).then((res) => {
      setProduct(res);
    });
    setLoading(false);
  }, [id]);
  return (
    <div className="m-0 p-0 flex flex-col relative">
      <HeaderLayout />
      <Main>
        {product?.product ? (
          <Product product={product} />
        ) : (
          <Container>
            <Loading />
          </Container>
        )}
      </Main>
    </div>
  );
};

export default ProductLayout;
