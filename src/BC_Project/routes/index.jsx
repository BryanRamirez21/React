import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MealsCategories from '../pages/MealsCategories';
import MealSearch from '../pages/MealSearch';
import Meals from '../pages/Meals';

const AppRouter = () => {
    return(
        <Routes>
            <Route path="/" element={<MealsCategories />} />
            <Route path="/MealSearch/:id" element={<MealSearch />} />
            <Route path="/Meals" element={<Meals />} />
        </Routes>
    );
};

export default AppRouter;
