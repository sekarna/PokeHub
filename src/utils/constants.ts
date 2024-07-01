export const POKEMON_API_BASE_URL = 'https://pokeapi.co/api/v2';
export const POKEMON_API_POKEMON_URL = `${POKEMON_API_BASE_URL}/pokemon`;


export const typesColors: {[key: string]: string} = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#A33EA1',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

export const formatNumber = (num: number) => {
  return num.toString().padStart(3, '0');
};
