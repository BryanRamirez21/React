import React from "react";
import { useEffect }  from 'react'
import { useLocation  } from "react-router-dom";
import useResultsStore from '../state/stores/calls';
import MealsItems from "../components/MealsItem";
import ReturnButton from "../components/ReturnButton";

const Meals = () => {

    const onSearchMeals = useResultsStore((state) => state.onSearchMeals);
    const isLoading = useResultsStore((state) => state.isLoading2);
    const error = useResultsStore((state) => state.error2);
    const searchResults = useResultsStore((state) => state.searchResults2);

    const location = useLocation();
    const data = location.state?.data;

    useEffect(() => {
        onSearchMeals(data);
    },[onSearchMeals, data]);

    return (
        <>
        <ReturnButton isCat={true}/>
        <h1 className=" my-20">Meals with {data.ingredient}</h1>
            <div className='flex flex-wrap'>
                {isLoading && <h6 className="text-2xl md:text-3xl lg:text-5xl tracking-wider">Loading...</h6>}
                {error && 
                    <div>
                    <h6 className='text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4'>Loading error</h6>
                    <p className="text-gray-500 mt-8 py-2 border-y-2 text-center">Please refresh the page or check your internet connection</p>  
                    </div>
                }
                {(!isLoading && !error) && searchResults?.map((meal, index) => <MealsItems key={index} {...meal} />)} 
            </div>
        </>
    );
};

export default Meals;
