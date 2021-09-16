import axios from 'axios';

// Constants
const initialData = {
  array: [],
  pokemons: [],
  offset: 0,
}

// Types
const GET_POKEMONS = 'GET_POKEMONS';
const GET_POKEMONS_FAIL = 'GET_POKEMONS_FAIL';
const GET_MORE_POKEMONS = 'GET_MORE_POKEMONS';

// Reducer
export default function pokemonReducer(state = initialData, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state, 
        array: [...state.array, ...action.payload.array], 
        pokemons: [...state.pokemons, ...action.payload.pokemons]
      }
    case GET_MORE_POKEMONS:
    case GET_POKEMONS_FAIL:
      return { ...state, array: [...state.array], pokemons: [...state.pokemons] };
    default: 
    return state
  }
}

// Actions
export const getPokemonsAction = () => async (dispatch, getState) => {
  let offset = getState().pokemons.offset;
  try {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=12`);

    async function getPokemonsInfo() {
      const pokemonsInfo = res.data.results;
      return pokemonsInfo
    }

    async function getPokemonImage(pokemonsInfo) {
      const pokemonPromise = pokemonsInfo.map(async pokemon => {
        const response = await axios.get(pokemon.url);
        const image = response.data.sprites.other.dream_world.front_default;
        return {
          name: pokemon.name,
          url: pokemon.url,
          image: image
        }
      })
      const pokemon = Promise.all(pokemonPromise)
      return pokemon
    }
    const pokemonsInfo = await getPokemonsInfo();
    const pokemons = await getPokemonImage(pokemonsInfo);  
  
    return dispatch({
      type: GET_POKEMONS,
      payload: {
        array: res.data.results,
        pokemons: pokemons
      }
    })

  } catch (error) {
    console.log(error, 'Error getting pokemons')
  } 
}



