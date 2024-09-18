import React from 'react'
import { useCounter } from '../03-functionalComponents/hooks/useCounter'
import { useFetch } from '../03-functionalComponents/hooks/useFetch';
import { PokemonCard } from '../03-functionalComponents/components/PokemonCard';
import { LoadingMessage } from '../03-functionalComponents/components/LoadingMessage';

export const Layout = () => {

    const {counter, increase, decrease, reset} = useCounter(1);
    const {data, isLoading, hasError, errorMessage} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    return (
        <>
            <h1>Pokemon info</h1>
            <hr/>
            {
                isLoading 
                ? <LoadingMessage />
                : <PokemonCard id={data?.id} name={data?.name} sprites={[data?.sprites.front_default, data?.sprites.back_default, data?.sprites.front_shiny, data?.sprites.back_shiny]}/>
            }
            <br></br>
            <button onClick={decrease}>Previous</button>
            <button onClick={increase}>Next</button>
        </>
    )
}