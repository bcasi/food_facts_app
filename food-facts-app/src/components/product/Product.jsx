import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductByBarcode } from "../../api/url";

const Product = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    
    getProductByBarcode(id).then((res) => {
      console.log(res);
    });
  }, [id]);

  return <div>Product</div>;
};

export default Product;
