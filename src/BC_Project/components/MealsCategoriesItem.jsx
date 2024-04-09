import React from "react";
import 'tailwindcss/tailwind.css';

const MealsCategoriesItem = ({ strCategoryThumb, strCategory, onClick, idCategory }) => {
  if (!strCategoryThumb || !strCategory || !idCategory) {
    throw new Error('Loading information error');
  }
  return (
    <div className="my-8 rounded shadow-lg shadow-gray-200 dark:shadow-gray-900 bg-white dark:bg-gray-800 duration-300 hover:-translate-y-1">
      <img src={strCategoryThumb} alt={strCategory} className="rounded-t h-72 w-full object-cover cursor-pointer" onClick={() => onClick(idCategory)} />
      <p className="text-lg mb-4 font-bold leading-relaxed text-gray-800 dark:text-gray-300">{strCategory}</p>
    </div>
  );
};

export default MealsCategoriesItem;
