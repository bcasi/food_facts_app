export default function removeEnFromString(arr) {
  return arr
    .map((element) => element.replace("en:", "").replace(/-/g, " "))
    .join(", ");
}

export function generateNutriscoreBgColor(grade) {
  const bgColorMap = {
    a: "bg-green-50",
    b: "bg-lime-50",
    c: "bg-yellow-50",
    d: "bg-orange-50",
    e: "bg-red-50",
  };
  return bgColorMap[grade] || "";
}

export function generateNutriscoreTextColor(grade) {
  const textColorMap = {
    a: "text-green-500",
    b: "text-lime-500",
    c: "text-yellow-500",
    d: "text-orange-500",
    e: "text-red-500",
  };
  return textColorMap[grade] || "";
}

export function generateNutriLabel(grade) {
  const labelMap = {
    a: "Very good",
    b: "Good",
    c: "Average",
    d: "Lower",
    e: "Lower",
  };
  return (labelMap[grade] || "") + " nutritional quantity";
}

export function removeEnFromStringAndPercent(arr) {
  let res = "";
  arr.forEach((element, i) => {
    const remove = element.id.replace("en:", "").replace(/-/g, " ");
    console.log(remove);
    res +=
      (i ? ", " : "") +
      remove +
      (element.percent_estimate
        ? "(" + Math.floor(element?.percent_estimate) + "%)"
        : "");
  });
  return res;
}
