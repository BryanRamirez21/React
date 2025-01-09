import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter/CounterSlice'
import { pokemonSlice } from './slices/pokemon/pokemonSlice'
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,

    pokemons: pokemonSlice.reducer
    // "esto ahora apunta a "
  },
})