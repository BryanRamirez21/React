import { useCounter } from "../hooks/useCounter";
import { usePokemon } from "../hooks/usePokemon";

export const PokeExamples = () => {

    const {counter, increment, decrement} = useCounter();
                                // Here we are sending the "{id: counter}" and not only: "counter", cause its defined as object in our hook
    const {pokemon, isLoading, formatedId} = usePokemon({id: counter});

    if(isLoading){
        return(
            <div className="bg-gradient flex flex-col items-center">
                <h1 className="text-2xl font-thin text-white">Pokemon</h1>
                <h3 className="text-xl font-bold text-white">Loading...</h3>
            </div>
        );
    }

    if(!pokemon){
        return(
            <div className="bg-gradient flex flex-col items-center">
                <h1 className="text-2xl font-thin text-white">Pokemon not found</h1>
            </div>
        );
    }

    return (
        <div className="bg-gradient flex flex-col items-center">
        <h1 className="text-2xl font-thin text-white">Pokemon</h1>
        <h3 className="text-xl font-bold text-white">#{formatedId} - {pokemon.name}</h3>
        <img
            src={pokemon?.image}
            alt={pokemon?.name}
        />
        {}

        <div className="flex gap-2">
            
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={decrement}
            >
            Anterior
            </button>
            
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
                onClick={increment}
            >
            Siguiente
            </button>
        
        </div>
        </div>
    );
};