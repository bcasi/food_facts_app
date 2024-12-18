import React from "react";
import removeEnFromString from "../../helpers/helper";

const ProductProperties = ({ property, isArr = [], value = null }) => {
  if (isArr?.length > 0) {
    value = removeEnFromString(isArr);
  }
  const classArr =
    isArr?.length > 0
      ? "capitalize font-normal text-sm text-wrap whitespace-normal break-words"
      : "font-normal text-sm whitespace-normal break-words";
  return (
    <p className="font-semibold text-wrap`">
      {property}:{" "}
      <span
        style={{ whiteSpace: "normal", wordBreak: "break-word" }}
        className={classArr}
      >
        {value}
      </span>
    </p>
  );
};

export default ProductProperties;
