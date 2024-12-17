import React, { useState } from "react";
import { categories } from "../../utils/constants";

const FilterButton = ({ filterName, handleFilter, data, render }) => {
  return (
    <select
      value={filterName}
      onChange={handleFilter}
      className="bg-white rounded-full text-sm  min-h-8 text-black min-w-40 h-14 sm:w-60 sm:h-10 hover:bg-slate-50 px-3 outline-none"
    >
      {render(data)}
    </select>
  );
};

export default FilterButton;
