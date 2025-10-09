import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter/CounterSlice'
import { pokemonSlice } from './slices/pokemon/pokemonSlice'
import { todosApi } from './API/todosApi'
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,

    pokemons: pokemonSlice.reducer,
    // "esto ahora apunta a "



    [todosApi.reducerPath]: todosApi.reducer,
  },
  //this is for the 'todosApi" not the rest of the reducers
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(todosApi.middleware)
})