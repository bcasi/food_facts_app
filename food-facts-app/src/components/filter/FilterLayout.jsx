import React, { useMemo, useState } from "react";
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

    const productSort = sortProducts([...products], selectedVal);

    setProducts(productSort);
  };

  // const sortedProducts = useMemo(() =>
  //   sortProducts([...products], sortProductOrNurtiscore, [
  //     products,
  //     sortProductOrNurtiscore,
  //   ])
  // );

  /** Sort functionality */

  function sortProducts(productsList, sortMethod) {
    return productsList.sort((a, b) => {
      if (sortMethod?.item === "products") {
        return sortProductName(a, b, sortMethod.sort);
      } else {
        return sortGrade(a, b, sortMethod.sort);
      }
    });
  }

  /**Some products doesn't have product_name */

  function sortProductName(a, b, sort) {
    if (sort === "asc") {
      return a.product_name.localeCompare(b.product_name);
    } else {
      return b.product_name.localeCompare(a.product_name);
    }
  }

  function sortGrade(a, b, sort) {
    if (sort === "asc") {
      return a.nutriscore_grade.localeCompare(b.nutriscore_grade);
    } else {
      return b.nutriscore_grade.localeCompare(a.nutriscore_grade);
    }
  }

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
