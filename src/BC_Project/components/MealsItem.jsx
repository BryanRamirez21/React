import React from "react";
import 'tailwindcss/tailwind.css';

const MealsItems = ({food}) => {
  if (!food) {
    throw new Error('Loading information error');
  }
  return (
    <div className="flex mb-10 items-center justify-center">
      <div className="mx-auto px-5">
        <div className="max-w-xs rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
          <img className="w-full rounded-lg object-cover object-center" src={food.image} alt={food.label}/>
            <div>
              <div className="my-6 flex items-center justify-between px-4">
                <p className="px-2 py-0.5 font-bold text-gray-500">{food.label}</p>
              </div>
              <div className="my-4 flex items-center justify-between px-4">
                <p className="text-sm font-semibold text-gray-500">Calories</p>
                <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">{food.nutrients.ENERC_KCAL}</p>
              </div>
              <div className="my-4 flex items-center justify-between px-4">
                <p className="text-sm font-semibold text-gray-500">Proteins</p>
                <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">{food.nutrients.PROCNT}g</p>
              </div>
              <div className="my-4 flex items-center justify-between px-4">
                <p className="text-sm font-semibold text-gray-500">Grease</p>
                <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">{food.nutrients.FAT}g</p>
              </div>
              <div className="my-4 flex items-center justify-between px-4">
                <p className="text-sm font-semibold text-gray-500">Carbs</p>
                <p className="rounded-full bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-600">{food.nutrients.CHOCDF}g</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default MealsItems;
