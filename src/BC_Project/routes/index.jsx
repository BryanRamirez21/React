import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MealsCategories from '../pages/MealsCategories';
import MealSearch from '../pages/MealSearch';
import Meals from '../pages/Meals';

const AppRouter = () => {
    const mealData = { id: 123, name: 'Pizza', description: 'Delicious pizza' };
    return(
        <Routes>
            <Route path="/" element={<MealsCategories />} />
            <Route path="/MealSearch/:id" element={<MealSearch />} />
            <Route path="/Meals" element={<Meals mealData={mealData}/>} />
            
        </Routes>
    );
};

export default AppRouter;
