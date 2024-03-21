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

    const onHandleSubmit = () => {
        onSearchMeals(mealCategory.strCategory);
    }

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

            
            <form>
                <div className="flex flex-col">
                <label htmlFor="ingredient" className="font-lato">Ingredient</label>
                <input type="text" id="ingredient" />

                <label htmlFor="healt" className="font-lato">Free of...</label>
                <select>
                    <option value="">--</option>
                    <option value="alcohol-free">alcohol-free</option>
                    <option value="celery-free">celery-free</option>
                    <option value="crustacean-free">crustacean-free</option>
                    <option value="dairy-free">dairy-free</option>
                    <option value="egg-free">egg-free</option>
                    <option value="fish-free">fish-free</option>
                    <option value="fodmap-free">fodmap-free</option>
                    <option value="gluten-free">gluten-free</option>
                    <option value="immuno-supportive">immuno-supportive</option>
                    <option value="keto-friendly">keto-friendly</option>
                    <option value="kidney-friendly">kidney-friendly</option>
                    <option value="kosher">kosher</option>
                    <option value="low-fat-abs">low-fat-abs</option>
                    <option value="low-potassium">low-potassium</option>
                    <option value="low-sugar">low-sugar</option>
                    <option value="lupine-free">lupine-free</option>
                    <option value="mustard-free">mustard-free</option>
                    <option value="no-oil-added">no-oil-added</option>
                    <option value="paleo">paleo</option>
                    <option value="peanut-free">peanut-free</option>
                    <option value="pescatarian">pescatarian</option>
                    <option value="pork-free">pork-free</option>
                    <option value="red-meat-free">red-meat-free</option>
                    <option value="sesame-free">sesame-free</option>
                    <option value="shellfish-free">shellfish-free</option>
                    <option value="soy-free">soy-free</option>
                    <option value="sugar-conscious">sugar-conscious</option>
                    <option value="tree-nut-free">tree-nut-free</option>
                    <option value="vegan">vegan</option>
                    <option value="vegetarian">vegetarian</option>
                    <option value="wheat-free">wheat-free</option>
                </select>

                <label htmlFor="calories" className="font-lato">Calories</label>
                <input type="number" id="calories" />

                <label htmlFor="category" className="font-lato">Category</label>
                <select>
                    <option value="">--</option>
                    <option value="generic-foods">generic-foods</option>
                    <option value="generic-meals">generic-meals</option>
                    <option value="packaged-foods">packaged-foods</option>
                    <option value="fast-foods">fast-foods</option>
                </select>

                <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onHandleSubmit} value='Search'/>
                </div>
            </form>
            
        </div>
    );
};

export default MealSearch;
