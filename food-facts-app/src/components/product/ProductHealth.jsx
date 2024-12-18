import React from "react";
import Nutriscore from "../ui/Nutriscore";
import {
  generateNutriLabel,
  generateNutriscoreBgColor,
  generateNutriscoreTextColor,
} from "../../helpers/helper";
import ProductIngredients from "./ProductIngredients";

const ProductHealth = ({ product }) => {
  const nutriScoreBg =
    generateNutriscoreBgColor(product?.nutriscore_grade) +
    " rounded-md  flex gap-1 p-3";

  const nutriScoreTextColor =
    generateNutriscoreTextColor(product?.nutriscore_grade) + " ";
  const nutriLabel = generateNutriLabel(product?.nutriscore_grade);
  return (
    <div className="grow flex flex-col justify-evenly">
      <h1 className="text-3xl">Health</h1>
      <div className="flex flex-col">
        <h3 className="text-xl">Nutrition</h3>
        <div className={nutriScoreBg}>
          <Nutriscore size="h-7" grade={product?.nutriscore_grade} />
          <div className="flex flex-col">
            <p className={nutriScoreTextColor}>
              {" "}
              Nutri-score{" "}
              <span className="capitalize">{product?.nutriscore_grade}</span>
            </p>
            <p>{nutriLabel}</p>
          </div>
        </div>
      </div>
      <ProductIngredients product={product} />
    </div>
  );
};

export default ProductHealth;
