import { useCounter } from './hooks/useCounter';
import { PokemonCard } from './components/PokemonCard';
import { LoadingMessage } from './components/LoadingMessage';
import { useFetch } from './hooks/useFetch';

export const MultipleCustomHooks = () => {

    const {counter, increase, decrease} = useCounter(1);
    const {data, isLoading, hasError, errorMessage} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    const PokeData = ({data}) => {
        return (
            <div>
                <PokemonCard id={data?.id} name={data?.name} sprites={[data?.sprites.front_default, data?.sprites.back_default, data?.sprites.front_shiny, data?.sprites.back_shiny]}/>
                <button className='btn btn-outline-info mr-4' onClick={decrease}>Previous</button>
                <button className='btn btn-outline-info' onClick={increase}>Next</button>
            </div>
        )
    }

    return (
        <div>
            <h1>Pokemon info</h1>
            <hr />
            {
                isLoading ?
                <LoadingMessage />
                :
                <PokeData data={data} />
            }
            
        </div>
    )
}
