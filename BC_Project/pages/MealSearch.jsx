import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import MealSearchForm from "../components/MealSearchForm";
import useMealSearch from "../hooks/useMealSearch";
import ReturnButton from "../components/ReturnButton";

const MealSearch = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const {mealCategory, isLoading, error} = useMealSearch(id-1)

    const onSubmit = data => {
        data = {
            ...data,
            ingredient: mealCategory.strCategory
        }
        handleMealClick(data);
    };

    const handleMealClick = (data) => {
        navigate(`/Meals`, { state: { data } });
    };

    return (
        <div className=" h-full">
            <ReturnButton isCat={false}/>
            {isLoading && <h6 className="text-2xl md:text-3xl lg:text-5xl tracking-wider">Loading...</h6>}
            {error && 
                <div>
                <h6 className='text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4'>Loading error</h6>
                <p className="text-gray-500 mt-8 py-2 border-y-2 text-center">Please refresh the page or check your internet connection</p>  
                </div>
            }
            {(!isLoading && !error) && mealCategory &&(
                <>
                    <MealSearchForm mealImg={mealCategory.strCategoryThumb} mealCatName={mealCategory.strCategory} onSubmit={onSubmit}/>
                </>
            )}
        </div>
    );
};

export default MealSearch;
