import { pokemonAPI } from "./API/pokemonAPI";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"

export const getPokemons = (page = 0) => {
    return async(dispatch, getState) => {
        // "dispatch es para hacer dispatch de otra funcion"
        // "getState es para obtener todo el rootState (alguna pieza de info del state)"

        dispatch(startLoadingPokemons());

        //const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page*10}`);
        //const data = await resp.json();
        // previous now is on /API/pokemonAPI (axios)

        const {data} = await pokemonAPI.get(`/pokemon?limit=10&offset=${page*10}`);
        dispatch(setPokemons({pokemons: data.results, page: page + 1}))
    }
}