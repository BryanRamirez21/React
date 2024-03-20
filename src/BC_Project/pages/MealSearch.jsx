import React from "react";
import { useState, useRef, useEffect }  from 'react'
import { useNavigate, useParams } from "react-router-dom";

import useResultsStore from '../state/stores/calls';

const MealSearch = () => {

    const isLoading = useResultsStore((state) => state.isLoading);
    const error = useResultsStore((state) => state.error);
    const searchResults = useResultsStore((state) => state.searchResults);
    const onSearchCategories = useResultsStore((state) => state.onSearchCategories);
    const navigate = useNavigate();
    const { id } = useParams();

    const onSearchMeals = useResultsStore((state) => state.onSearchMeals);

    const [mealCategory, setMealCategory] = useState("");

    useEffect(() => {
        onSearchCategories();

        setMealCategory(searchResults[id-1])
    },[]);

    const hacer = () => {
        onSearchMeals(mealCategory.strCategory);
    }

    return (
        <div className="mx-2 my-4 w-40 h-52 flex flex-col items-start text-ellipsis overflow-hidden">
            {isLoading && <h6 className="mt-8">Cargando...</h6>}
            {error && <h6 className="text-red">Ha ocurrido un error</h6>}
            {!isLoading && mealCategory &&(
                <>
                    <img src={mealCategory.strCategoryThumb} alt={mealCategory.strCategory} className="w-40" />
                    <p className="font-lato">{mealCategory.strCategory}</p>
                    <button onClick={hacer}>Buscar</button>
                </>
            )}
        </div>
    );
};

export default MealSearch;
