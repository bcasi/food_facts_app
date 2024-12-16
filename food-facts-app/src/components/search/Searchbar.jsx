import React, { useEffect, useState } from "react";
import { searchProductName } from "../../api/url";

const Searchbar = ({ search, setSearch }) => {
  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  return (
    <div className="m-3">
      <input
        value={search}
        onChange={handleSearch}
        className="flex w-full md:w-64 lg:w-96 h-8 rounded-full bg-white px-5 outline-none"
        placeholder="Search for a product or Enter product barcode"
      />
    </div>
  );
};

export default Searchbar;
