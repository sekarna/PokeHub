import {FlatList, StyleSheet, View, Text} from 'react-native';
import {fetchAllPokemon} from '../services/pokemonService';
import {AllPokemon} from '../utils/pokemonInterface';
import {PokemonCard} from './PokemonCard';
import {useQuery} from '@tanstack/react-query';

export default function PokemonList() {
  const {data, isLoading, error} = useQuery<AllPokemon>({
    queryKey: ['pokemons'],
    queryFn: fetchAllPokemon,
  });
  console.log('query', data);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.name}
        renderItem={({item}) => <PokemonCard url={item.url} name={item.name} />}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  list: {
    marginTop: 100,
    marginLeft: 10,
  },
});
