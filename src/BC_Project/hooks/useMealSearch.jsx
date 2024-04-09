import { useState, useEffect } from "react";
import apiMealsCategories from "../api/MealsCategoriesAPI";

const useMealSearch = (id) => {
    const [mealCategory, setMealCategory] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                setError(undefined);
                setMealCategory([]);
                const response = await apiMealsCategories();
                setMealCategory(response?.categories?.[id]);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();  
    },[id]);

    return {mealCategory, isLoading, error};
}

export default useMealSearch;