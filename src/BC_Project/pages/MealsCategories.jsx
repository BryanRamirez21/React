import React from 'react'
import { useState, useRef, useEffect }  from 'react'
import { useNavigate } from "react-router-dom";

import MealMenuItem from '../components/MealsCategoriesItem';
import useResultsStore from '../state/stores/calls';

const MealsCategories = () => {

  const isLoading = useResultsStore((state) => state.isLoading);
  const error = useResultsStore((state) => state.error);
  const searchResults = useResultsStore((state) => state.searchResults);
  const onSearchCategories = useResultsStore((state) => state.onSearchCategories);
  const navigate = useNavigate();


  useEffect(() => {
      onSearchCategories();
  }, []);

  const handleMealClick = (id) => {
    navigate(`/MealSearch/${id}`);
  };

  return (
    <div className='flex flex-wrap'>
      {isLoading && <h6 className="mt-8">Cargando...</h6>}
      {error && <h6 className="text-red">Ha ocurrido un error</h6>}
      {!isLoading && searchResults?.map((mealCategory, index) => <MealMenuItem key={index} {...mealCategory} onClick={handleMealClick} />)} 
    </div>
  )
}

export default MealsCategories;