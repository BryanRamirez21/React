import React from 'react'
import { useFetch } from './hooks/useFetch'
import { LoadingMessage } from './components/LoadingMessage'
import { useCounter } from '../01-useState/hooks/useCounter';
import { PokemonCard } from './components/PokemonCard';

export const MultipleCustomHooks = () => {

    const {counter, increment, decrement} = useCounter();
    const {data, isLoading, hasError, errorMessage} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    return (
        <div>
            <h1>Poke Info</h1>
            <hr />
            {isLoading 
                ? <LoadingMessage />
                : <PokemonCard id={counter} name={data.name} imgs={[data.sprites.front_default, data.sprites.back_default]}/>
            }

            <button onClick={decrement}>Previous</button>
            <button onClick={increment}>Next</button>
        </div>
    )
}
