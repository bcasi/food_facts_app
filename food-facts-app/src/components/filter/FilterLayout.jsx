import React from "react";
import Container from "../common/Container";
import FilterButton from "./FilterButton";

const FilterLayout = () => {
  return (
    <div className="bg-black min-h-20 w-screen h-20 mb-10">
      <Container>
        <div className="flex h-full  text-white gap-5 items-center justify-center md:justify-start md:items-center md:pl-5 ">
          <FilterButton />
          <FilterButton />
        </div>
      </Container>
    </div>
  );
};

export default FilterLayout;
