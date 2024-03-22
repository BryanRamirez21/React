import React from "react";
import { useState, useRef, useEffect }  from 'react'
import { useNavigate, useParams, useLocation  } from "react-router-dom";
import useResultsStore from '../state/stores/calls';
import MealsItems from "../components/MealsItem";

const Meals = () => {

    const navigate = useNavigate();
    const onSearchMeals = useResultsStore((state) => state.onSearchMeals);
    const isLoading = useResultsStore((state) => state.isLoading);
    const error = useResultsStore((state) => state.error);
    const searchResults = useResultsStore((state) => state.searchResults);

    const location = useLocation();
    const data = location.state?.data;

    useEffect(() => {
        if (data) {
            onSearchMeals(data);
        }
    },[data]);


    return (
        <div className='flex flex-wrap'>
            {isLoading && <h6 className="mt-8">Cargando...</h6>}
            {error && <h6 className="text-red">Ha ocurrido un error</h6>}
            {!isLoading && searchResults?.map((meal, index) => <MealsItems key={index} {...meal}  />)} 
        </div>
    );
};

export default Meals;
