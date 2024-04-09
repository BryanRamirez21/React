import { create } from "zustand";
import apiMealsCategories from "../../api/MealsCategoriesAPI";
import apiMealsOpts from "../../api/MealsOptsAPI";


const categoriesState = {
    searchResults1: [],
    isLoading1: false,
    error1: undefined,
}

const mealsState = {
    searchResults2: [],
    isLoading2: false,
    error2: undefined,
}

const useResultsStore = create((set, get) => ({

    ...categoriesState,    
    onSearchCategories: async () => {
        try{
            set({isLoading1: true, error1: undefined});
            const response = await apiMealsCategories();
            set({searchResults1: response?.categories});
        } catch (error1){
            set({error1: error1});
        } finally{
            set({isLoading1: false});
        }
    },

    ...mealsState,
    onSearchMeals: async (params) => {
        try{
            set({isLoading2: true, error2: undefined});
            const response = await apiMealsOpts(params);
            set({searchResults2: response?.hints});
        } catch (error2){
            set({error2: error2});
        } finally{
            set({isLoading2: false});
        }
    }
}))


export default useResultsStore;