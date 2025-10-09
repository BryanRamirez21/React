import { useEffect, useState } from "react"

interface Pokemon {
    id: number;
    name: string;
    image: string;
}

interface Props {
    id: number;

}
export const usePokemon = ({id}: Props) => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const getPokemonById = async(id: number) => {
        setIsLoading(true);

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
console.log(data)
        setPokemon({
            id: id,
            name: data.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
        });

        setIsLoading(false);
    }

    useEffect(() => {
        getPokemonById(id)
    }, [id])

    return {
        pokemon,
        isLoading,
        formatedId: id.toString().padStart(3,'0')
    }
}
