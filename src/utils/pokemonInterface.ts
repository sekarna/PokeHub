export interface AllPokemon {
  count: number;
  next: string;
  previous?: string;
  results: {
    name: string;
    url: string;
  }[];
}

export interface Pokemon {
  name: string;
  order: number;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
  types: {
    slot: number;
    type: {
      name: string;
    };
  }[];
  stats: {
    base_stat: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
  height: number;
  weight: number;
  moves: {
    move: {
      name: string;
      url: string;
    };
  }[];
}

