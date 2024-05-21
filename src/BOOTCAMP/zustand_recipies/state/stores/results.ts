import { create } from "zustand";
import apiCall from "../../api";

type Actions = {onSearchResults: (searchText: string) => Promise<void>;};
type State = {
  searchResults: any[],
  isLoading: boolean,
  error: undefined | object | Error
};

const initalState: State = {
  searchResults: [],
  isLoading: false,
  error: undefined,

};

const useResultsStore = create<State & Actions>((set, get) => ({
  ...initalState,
  onSearchResults: async (searchText) => {
    try{
      set({isLoading: true, error: undefined});
      const response = await apiCall(`/search.php?s=${searchText}`);
      set({searchResults: response?.meals});
    } catch (error){
      set({error: error as Error});
    } finally{
      set({isLoading: false});
    }
  }
}));


export default useResultsStore;