import React from "react";
import 'tailwindcss/tailwind.css';

const MealsCategoriesItem = ({ strCategoryThumb, strCategory, onClick, idCategory }) => {
  return (
    <div className="mx-2 my-4 w-40 h-52 flex flex-col items-start text-ellipsis overflow-hidden">
      <img src={strCategoryThumb} alt={strCategory} className="w-40 cursor-pointer" onClick={() => onClick(idCategory)} />
      <p className="font-lato">{strCategory}</p>
    </div>
  );
};

export default MealsCategoriesItem;
