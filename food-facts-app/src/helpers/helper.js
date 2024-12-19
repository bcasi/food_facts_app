export default function removeEnFromString(arr) {
  return arr
    .map((element) => element.replace("en:", "").replace(/-/g, " "))
    .join(", ");
}

export function getColorLabelUsingGrade(grade, type) {
  const labelColorObject = {
    a: {
      label: "Very good nutritional quantity",
      text_color: "text-green-500",
      bg_color: "bg-green-50",
    },
    b: {
      label: "Good nutritional quantity",
      text_color: "text-lime-500",
      bg_color: "bg-green-50",
    },
    c: {
      label: "Average nutritional quantity",
      text_color: "text-yellow-500",
      bg_color: "bg-yellow-50",
    },
    d: {
      label: "Lower nutritional quantity",
      text_color: "text-orange-500",
      bg_color: "bg-orange-50",
    },
    e: {
      label: "Poor nutritional quantity",
      text_color: "text-red-500",
      bg_color: "bg-red-50",
    },
  };
  return labelColorObject[grade][type] || "";
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
