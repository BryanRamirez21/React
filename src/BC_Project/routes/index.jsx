import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MealsCategories from '../pages/MealsCategories';
import MealSearch from '../pages/MealSearch';

const AppRouter = () => {
    return(
    <Routes>
        <Route path="/" element={<MealsCategories />} />
        <Route path="/MealSearch/:id" element={<MealSearch />} />
    </Routes>
    
    );
};

export default AppRouter;
