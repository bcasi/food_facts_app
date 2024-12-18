import React from "react";

const NutriscoreImg = ({ imgSrc, size = "w-20" }) => {
  return <img className={size} src={imgSrc} alt="Nutri-Score A" />;
};

export default NutriscoreImg;
