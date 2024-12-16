import React from "react";

const FilterOption = ({ filter }) => {
  return <option value={filter?.value}>{filter?.name}</option>;
};

export default FilterOption;
