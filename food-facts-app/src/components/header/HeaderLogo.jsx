import React from "react";

const HeaderLogo = () => {
  return (
    <div className="flex md:justify-between m-2 h-12  pt-1 gap-1 cursor-pointer">
      <h1 className="text-2xl font-medium m-1">
        <span className="uppercase bg-orange-400 px-2 text-white inline-block -rotate-6 rounded">
          food
        </span>
      </h1>
      <h1 className="text-3xl font-medium">facts</h1>
    </div>
  );
};

export default HeaderLogo;
