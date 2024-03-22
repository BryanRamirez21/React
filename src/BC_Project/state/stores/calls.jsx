import { create } from "zustand";
import apiMealsCategories from "../../api/MealsCategoriesAPI";
import apiMealsOpts from "../../api/MealsOptsAPI";


const categoriesState = {
    searchResults: [],
    isLoading: false,
    error: undefined,
}

const mealsState = {
    searchResults: [],
    isLoading: false,
    error: undefined,
}

const useResultsStore = create((set, get) => ({

    ...categoriesState,    
    onSearchCategories: async () => {
        try{
            set({isLoading: true, error: undefined});
            const response = await apiMealsCategories();
            set({searchResults: response?.categories});
        } catch (error){
            set({error: error});
        } finally{
            set({isLoading: false});
        }
    },

    ...mealsState,
    onSearchMeals: async (params) => {
        try{
            set({isLoading: true, error: undefined});
            const response = await apiMealsOpts(params);
            set({searchResults: response?.hints});
            //console.log(response?.hints)
        } catch (error){
            set({error: error});
        } finally{
            set({isLoading: false});
        }
    }
}))


export default useResultsStore;