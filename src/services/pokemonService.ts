import {POKEMON_API_POKEMON_URL} from '../utils/constants';
import {AllPokemon, Pokemon} from '../utils/pokemonInterface';


export async function fetchAllPokemon({ pageParam = POKEMON_API_POKEMON_URL }: { pageParam?: string }): Promise<AllPokemon> {
  try {
    const response = await fetch(pageParam);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch error:', error);
    throw error;
  }
}


export async function fetchPokemonDetails(url: string): Promise<Pokemon> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data as Pokemon;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}