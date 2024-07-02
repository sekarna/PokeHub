import normalIcon from '../assets/normal.png';
import grassIcon from '../assets/grass.png';
import fireIcon from '../assets/fire.png';
import waterIcon from '../assets/water.png';
import electricIcon from '../assets/electric.png';
import iceIcon from '../assets/ice.png';
import fightingIcon from '../assets/fighting.png';
import poisonIcon from '../assets/poison.png';
import groundIcon from '../assets/ground.png';
import flyingIcon from '../assets/flying.png';
import psychicIcon from '../assets/psychic.png';
import bugIcon from '../assets/bug.png';
import rockIcon from '../assets/rock.png';
import ghostIcon from '../assets/ghost.png';
import dragonIcon from '../assets/dragon.png';
import darkIcon from '../assets/dark.png';
import steelIcon from '../assets/steel.png';
import fairyIcon from '../assets/fairy.png';


export const POKEMON_API_BASE_URL = 'https://pokeapi.co/api/v2';
export const POKEMON_API_POKEMON_URL = `${POKEMON_API_BASE_URL}/pokemon`;


export const typesInfo: {[key: string]: {color: string; icon: any}} = {
  normal: {color: '#A8A77A', icon: normalIcon},
  fire: {color: '#EE8130', icon: fireIcon},
  water: {color: '#6390F0', icon: waterIcon},
  electric: {color: '#F7D02C', icon: electricIcon},
  grass: {color: '#7AC74C', icon: grassIcon},
  ice: {color: '#96D9D6', icon: iceIcon},
  fighting: {color: '#C22E28', icon: fightingIcon},
  poison: {color: '#A33EA1', icon: poisonIcon},
  ground: {color: '#E2BF65', icon: groundIcon},
  flying: {color: '#A98FF3', icon: flyingIcon},
  psychic: {color: '#F95587', icon: psychicIcon},
  bug: {color: '#A6B91A', icon: bugIcon},
  rock: {color: '#B6A136', icon: rockIcon},
  ghost: {color: '#735797', icon: ghostIcon},
  dragon: {color: '#6F35FC', icon: dragonIcon},
  dark: {color: '#705746', icon: darkIcon},
  steel: {color: '#B7B7CE', icon: steelIcon},
  fairy: {color: '#D685AD', icon: fairyIcon},
};

export const formatNumber = (num: number) => {
  return num.toString().padStart(3, '0');
};
