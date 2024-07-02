import {FlatList, StyleSheet, View, Text, ActivityIndicator} from 'react-native';
import {fetchAllPokemon} from '../services/pokemonService';
import {AllPokemon} from '../utils/pokemonInterface';
import {PokemonCard} from './PokemonCard';
import {useInfiniteQuery, useQuery} from '@tanstack/react-query';

export default function PokemonList() {
  const {data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage} =
    useInfiniteQuery({
      queryKey: ['pokemons'],
      queryFn: fetchAllPokemon,
      getNextPageParam: lastPage => lastPage.next,
    });

  const handleLoadMore = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  if (isLoading) {
    return <ActivityIndicator />;
  }


  return (
    <View style={styles.container}>
      <FlatList
        data={data?.pages.flatMap(page => page.results) ?? []}
        renderItem={({item}) => <PokemonCard url={item.url} name={item.name} />}
        keyExtractor={item => item.name}
        onEndReached={handleLoadMore}
        ListFooterComponent={() =>
          isFetchingNextPage ? <ActivityIndicator /> : null
        }
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
