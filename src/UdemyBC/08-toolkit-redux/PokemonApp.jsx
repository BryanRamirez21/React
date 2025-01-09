import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/Thunks';
import { incPage } from './store/slices/pokemon/pokemonSlice';

export const PokemonApp = () => {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPokemons())
    }, []);
    
    const {page, pokemons, isLoading} = useSelector(state => state.pokemons); //? pokemons y no pokemon (?)
    //const {counter} = useSelector(state => state.counter);

    return (
        <>
            <h1>Pokemon App</h1>
            <hr />
            <span>
                <h2>Loading: {isLoading ? 'true' : 'false' }</h2>
            </span>
            <ul>
                {
                    pokemons.map((pokemon, key) => (
                        <li key={key}>{pokemon.name}</li>
                    ))
                }
            </ul>
            <button onClick={() => dispatch(incPage())}>next page</button>
        </>

    )
}
