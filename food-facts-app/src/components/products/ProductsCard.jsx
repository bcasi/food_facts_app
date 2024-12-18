import React from "react";
import Nutriscore from "../ui/Nutriscore";
import { NavLink } from "react-router";

const ProductsCard = ({ data }) => {
  return (
    <NavLink
      to={`/product/${data._id}`}
      className="bg-white cursor-pointer hover:bg-slate-50 rounded-md h-80 md:min-w-64 w-52  p-5 drop-shadow-2xl flex flex-col justify-center items-center "
    >
      <div className="w-full flex justify-center">
        <img
          className="h-36 min-h-36 max-w-[147px]"
          src={data?.image_front_url}
          alt={data?.product_name}
        />
      </div>
      <h3 className="capitalize">
        {data?.product_name ||
          data?.product_name_de ||
          data?.product_name_en ||
          data?.product_name_fr ||
          data?.abbreviated_product_name}{" "}
        - {data?.brands}
      </h3>
      <div className="flex mt-5">
        <Nutriscore grade={data?.nutriscore_grade} />
      </div>
    </NavLink>
  );
};

export default ProductsCard;
