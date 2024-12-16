import React from "react";
import Container from "../common/Container";
import FilterButton from "./FilterButton";
import FilterOption from "./FilterOption";

const FilterLayout = ({
  dataSort,
  sortFilter,
  handleSort,
  dataFilter,
  categoryFilter,
  handleCategory,
}) => {
  return (
    <div className="bg-black min-h-20 w-screen h-20 mb-10">
      <Container>
        <div className="flex h-full  text-white gap-5 items-center justify-center md:justify-start md:items-center md:pl-5 ">
          <FilterButton
            filterName={JSON.stringify(sortFilter)}
            handleFilter={handleSort}
            data={dataSort}
            render={(sortItem) =>
              sortItem?.map((sort) => (
                <option key={sort.name} value={JSON.stringify(sort.value)}>
                  {sort?.name}
                </option>
              ))
            }
          />
          <FilterButton
            filterName={categoryFilter}
            handleFilter={handleCategory}
            data={dataFilter}
            render={(categories) =>
              categories?.map((category) => (
                <FilterOption key={category?.name} filter={category} />
              ))
            }
          />
        </div>
      </Container>
    </div>
  );
};

export default FilterLayout;
