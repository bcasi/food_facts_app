import React from "react";

const ProductContentSkelton = ({ children }) => {
  return (
    <div className=" 2xl:w-full 2xl:h-full flex flex-col mr-24 ml-12 md:mr-20 md:ml-10 mt-7 2xl:mr-7  md:flex-row  justify-center gap-20 rounded-3xl bg-white py-10 px-20 ">
      {children}
    </div>
  );
};

export default ProductContentSkelton;
