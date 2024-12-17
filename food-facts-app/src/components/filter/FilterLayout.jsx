import React, { useState } from "react";
import Container from "../common/Container";
import FilterButton from "./FilterButton";
import FilterOption from "./FilterOption";
import { categories, productAndGradeSort } from "../../utils/constants";

const FilterLayout = ({
  categoryFilter,
  setCategoryFilter,
  products,
  setProducts,
}) => {
  const [sortProductOrNurtiscore, setSortProductAndNutriscore] = useState(
    productAndGradeSort?.[0].value
  );

  const handleCategory = (e) => {
    setCategoryFilter(e.target.value);
  };

  const handleSortProductByName = (e) => {
    const selectedVal = JSON.parse(e.target.value);
    const findSort = productAndGradeSort.find(
      (val) =>
        val.value.item === selectedVal.item &&
        val.value.sort === selectedVal.sort
    );

    setSortProductAndNutriscore(findSort.value);

    const sortedProducts = [...products].sort((a, b) =>
      isProducts(selectedVal, a, b)
    );

    setProducts(sortedProducts);
  };

  /** Sort functionality */
  const isProducts = (val, a, b) => {
    if (val.item === "products") {
      return isProductName(a, b, val.sort);
    } else {
      if (val.sort === "asc") {
        return a.nutriscore_grade.localeCompare(b.nutriscore_grade);
      } else {
        return b.nutriscore_grade.localeCompare(a.nutriscore_grade);
      }
    }
  };

  /**Some products doesn't have product_name */

  const isProductName = (a, b, sort) => {
    if (a.product_name === "") {
      if (sort === "asc") {
        return a.abbreviated_product_name.localeCompare(
          b.abbreviated_product_name
        );
      } else {
        return b.abbreviated_product_name.localeCompare(
          a.abbreviated_product_name
        );
      }
    } else {
      if (sort === "asc") {
        return a.product_name.localeCompare(b.product_name);
      } else {
        return b.product_name.localeCompare(a.product_name);
      }
    }
  };

  return (
    <div className="bg-black min-h-20 w-screen h-20 mb-10">
      <Container>
        <div className="flex h-full  text-white gap-5 items-center justify-center md:justify-start md:items-center md:pl-5 ">
          <FilterButton
            filterName={JSON.stringify(sortProductOrNurtiscore)}
            handleFilter={handleSortProductByName}
            data={productAndGradeSort}
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
            data={categories}
            render={(categoriesData) =>
              categoriesData?.map((category) => (
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
