import React from "react";
import 'tailwindcss/tailwind.css';

const MealsItems = ({food}) => {
  return (
    <div className="mx-2 my-4 w-40 h-52 flex flex-col items-start text-ellipsis overflow-hidden">
      <img src={food.image} alt={food.knownAs} className="w-40 cursor-pointer" />
      <p className="font-lato">{food.knownAs}</p>
    </div>
  );
};

export default MealsItems;
