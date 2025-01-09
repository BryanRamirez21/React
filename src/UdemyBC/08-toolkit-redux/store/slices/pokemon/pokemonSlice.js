import { createSlice } from '@reduxjs/toolkit';
export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false
    },
    reducers: {
        // "si yo mando un action que se llame 'startLoadingPokemons' voy a..."
        startLoadingPokemons: (state, /* action */ ) => {
            state.isLoading = true;
        },

        setPokemons: (state, action ) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons
        },

        incPage: (state, action) => {
            state.page += 1
        }
    }
});

export const { startLoadingPokemons, setPokemons, incPage } = pokemonSlice.actions;