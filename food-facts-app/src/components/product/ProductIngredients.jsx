import React from "react";
import removeEnFromString, {
  removeEnFromStringAndPercent,
} from "../../helpers/helper";

const ProductIngredients = ({ product }) => {
  const ingredientsList = removeEnFromStringAndPercent(product?.ingredients);
  const allergensList = removeEnFromString(product?.allergens_hierarchy);
  return (
    <div className="flex flex-col">
      <h3 className="text-2xl">Ingredients</h3>
      <div className=" h-24 p-3">
        <p className="text-gray-500 text-xl">
          {product?.ingredients.length > 0
            ? product?.ingredients.length + " Ingredients"
            : "Ingredients are missing"}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {ingredientsList && <p className="capitalize">{ingredientsList}</p>}
        {allergensList && (
          <p className="font-semibold ">
            Allergens:{" "}
            <span className="font-normal capitalize">{allergensList}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductIngredients;
