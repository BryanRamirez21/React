import React from "react";
import { useState, useRef, useEffect }  from 'react'
import { useNavigate, useParams } from "react-router-dom";
import MealSearchForm from "../components/MealSearchForm";
import useResultsStore from '../state/stores/calls';
import apiMealsCategories from "../api/MealsCategoriesAPI";


const MealSearch = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const onSearchMeals = useResultsStore((state) => state.onSearchMeals);

    const [mealCategory, setMealCategory] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                setError(undefined);
                setMealCategory([]);
                const response = await apiMealsCategories();
                setMealCategory(response?.categories?.[id-1]);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();  
    },[id]);

    const onSubmit = data => {
        data = {
            ...data,
            ingredient: mealCategory.strCategory
        }
        onSearchMeals(data);
    };

    return (
        <div className="">
            {isLoading && <h6 className="mt-8">Cargando...</h6>}
            {error && <h6 className="text-red">Ha ocurrido un error</h6>}
            {!isLoading && mealCategory &&(
                <>
                    <img src={mealCategory.strCategoryThumb} alt={mealCategory.strCategory} className="w-40" />
                    <p className="font-lato">{mealCategory.strCategory}</p>
                </>
            )}

            <MealSearchForm onSubmit={onSubmit}/>
            
            
        </div>
    );
};

export default MealSearch;
