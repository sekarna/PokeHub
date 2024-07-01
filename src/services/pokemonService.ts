import {POKEMON_API_POKEMON_URL} from '../utils/constants';
import {AllPokemon, Pokemon} from '../utils/pokemonInterface';


export async function fetchAllPokemon(): Promise<AllPokemon> {
  try {
    const response = await fetch(POKEMON_API_POKEMON_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.results as AllPokemon;
  } catch (error) {
    console.log('Fetch error:', error);
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
    throw error; // Re-lancer l'erreur pour une gestion ultérieure
  }
}
