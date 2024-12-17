import React from "react";

const food = [
  "🥤",
  "🧃",
  "🍔",
  "🍕",
  "🍜",
  "🧋",
  "🍟",
  "🌭",
  "🍿",
  "🍳",
  "🫓",
  "🥯",
  "🧀",
  "🍖",
  "🥩",
  "🍖",
  "🥫",
  "🫔",
  "🌯",
];

const Loading = () => {
  const min = 0;
  const max = food.length;
  const randomInt = Math.floor(Math.random() * (max - min + 1));

  return (
    <div className=" flex justify-center items-center text-6xl  w-6 p-5">
      <h1>Loading {food[randomInt]}...</h1>
    </div>
  );
};

export default Loading;
