import React from 'react';
import { useFetch } from './hooks';
import { useCounter } from './hooks/useCounter';
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';

export const MultipleCustomHooks = () => {

    const {counter,increment,decrement} = useCounter(1);    
    const {data, isLoadging, hasError, error} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    return (
        <>
            <h1>Pokemon information card</h1>
            <hr />
            {
                isLoadging 
                ? <LoadingMessage />
                : <PokemonCard id={data?.id} name={data?.name} 
                    sprites={[
                        data?.sprites.front_default, 
                        data?.sprites.front_shiny, 
                        data?.sprites.back_default, 
                        data?.sprites.back_shiny]}
                />
            }

            <button
                className=' mt-2'
                onClick={() => counter > 1 ? decrement() : null}
            >
                Anterior
            </button>
            
            <button
                className=' mt-2' 
                onClick={() => increment()}
            >
                Siguiente
            </button>
        </>

    )
}
