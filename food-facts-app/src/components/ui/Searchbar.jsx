import React from "react";

const Searchbar = () => {
  return (
    <div className="m-3">
      <input
        className="flex w-full md:w-64 lg:w-96 h-8 rounded-full bg-white px-5 outline-none"
        placeholder="Search for a product or Enter product barcode"
      />
    </div>
  );
};

export default Searchbar;
