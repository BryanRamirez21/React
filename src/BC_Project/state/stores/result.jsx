import { create } from "zustand";
import apiCall from "../../api";

const initalState = {
    searchResults: [],
    isLoading: false,
    error: undefined,
}

const useResultsStore = create((set, get) => ({
    ...initalState,
    onSearchResults: async (data) => {
        try{
            set({isLoading: true, error: undefined});
            const response = await apiCall(data);
            set({searchResults: response?.response.data});
        } catch (error){
            set({error: error});
        } finally{
            set({isLoading: false});
        }
    }
}))

export default useResultsStore;