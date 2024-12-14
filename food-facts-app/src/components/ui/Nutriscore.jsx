import React from "react";
import scoreA from "../../assets/nutriscore-a.svg";
import scoreB from "../../assets/nutriscore-b.svg";
import scoreC from "../../assets/nutriscore-c.svg";
import scoreD from "../../assets/nutriscore-d.svg";
import scoreE from "../../assets/nutriscore-e.svg";
import NutriscoreImg from "./NutriscoreImg";

const Nutriscore = ({ grade }) => {
  function matchGrade() {
    switch (grade) {
      case "a":
        return <NutriscoreImg imgSrc={scoreA} />;
      case "b":
        return <NutriscoreImg imgSrc={scoreB} />;
      case "c":
        return <NutriscoreImg imgSrc={scoreC} />;
      case "d":
        return <NutriscoreImg imgSrc={scoreD} />;
      case "e":
        return <NutriscoreImg imgSrc={scoreE} />;
      default:
        return null;
    }
  }

  return <>{matchGrade()}</>;
};

export default Nutriscore;
