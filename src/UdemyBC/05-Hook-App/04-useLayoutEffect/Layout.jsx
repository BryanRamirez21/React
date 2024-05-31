import React from 'react'
import { useFetch } from '../03-functionalComponents/hooks/useFetch'
import { LoadingMessage } from '../03-functionalComponents/components/LoadingMessage'
import { useCounter } from '../01-useState/hooks/useCounter';
import { PokemonCard } from '../03-functionalComponents/components/PokemonCard';

export const Layout = () => {

    const {counter, increment, decrement} = useCounter();
    const {data, isLoading, hasError, errorMessage} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    return (
        <div>
            <h1>Poke Info</h1>
            <hr />
            {isLoading 
                ? <LoadingMessage />
                : <PokemonCard id={data.id} name={data.name} sprites={data.sprites}/>
            }

            <button onClick={decrement}>Previous</button>
            <button onClick={increment}>Next</button>
        </div>
    )
}
