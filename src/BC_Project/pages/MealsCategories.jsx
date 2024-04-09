import React from 'react'
import { useState, useRef, useEffect }  from 'react'
import { useNavigate } from "react-router-dom";

import MealMenuItem from '../components/MealsCategoriesItem';
import useResultsStore from '../state/stores/calls';

const MealsCategories = () => {

  const isLoading = useResultsStore((state) => state.isLoading1);
  const error = useResultsStore((state) => state.error1);
  const searchResults = useResultsStore((state) => state.searchResults1);
  const onSearchCategories = useResultsStore((state) => state.onSearchCategories);
  const navigate = useNavigate();


  useEffect(() => {
      onSearchCategories();
  }, []);

  const handleMealClick = (id) => {
    navigate(`/MealSearch/${id}`);
  };

  return (
    <>
      {isLoading && <h6 className="text-2xl md:text-3xl lg:text-5xl tracking-wider">Loading...</h6>}
      {error && 
        <div>
          <h6 className='text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4'>Loading error</h6>
          <p className="text-gray-500 mt-8 py-2 border-y-2 text-center">Please refresh the page or check your internet connection</p>  
        </div>
      }
      <h1>Nutritional information</h1><br></br>
      <h2>Choose a category</h2>
      <div className='grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {!isLoading && searchResults?.map((mealCategory, index) => <MealMenuItem key={index} {...mealCategory} onClick={handleMealClick} />)} 
      </div>
    </>
  )
}

export default MealsCategories;