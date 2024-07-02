// screens/PokemonDetailsScreen.tsx
import React from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {fetchPokemonDetails} from '../services/pokemonService';
import {Pokemon} from '../utils/pokemonInterface';
import {formatNumber, typesInfo} from '../utils/constants';
import LinearGradient from 'react-native-linear-gradient';
import StatsItems from '../components/StatsItems';

const PokemonDetailsScreen = ({route}) => {
  const {url, name} = route.params;
  const {data, isLoading, error} = useQuery<Pokemon>({
    queryKey: ['pokemon', url],
    queryFn: () => fetchPokemonDetails(url),
  });

  if (isLoading) return <ActivityIndicator />;
  if (error) return <Text>Error loading Pokémon details.</Text>;

  const type = data.types[0].type.name;
  const backgroundColor = typesInfo[type].color || 'gray';
  const maxStat = Math.max(...data.stats.map(stat => stat.base_stat));
  const hpStat = data.stats.find(stat => stat.stat.name === 'hp');
  const hp = hpStat ? hpStat.base_stat : 0;

  return (
    <LinearGradient colors={['#1c1c1c', '#000000']} style={styles.container}>
      <View style={[styles.card, {backgroundColor, borderColor: '#eee77d'}]}>
        <View style={styles.cardHeader}>
          <Text style={styles.name}>
            {data.name.replace(/^\w/, c => c.toUpperCase())}
          </Text>
          <View style={styles.statsContainer}>
            <Text style={styles.pv}>PV</Text>
            <Text style={styles.hp}>{hp}</Text>
            <Image source={typesInfo[type].icon} style={styles.typeIcon} />
          </View>
        </View>
        <View style={styles.cardImage}>
          <Image
            source={{
              uri: data?.sprites?.other['official-artwork']?.front_default,
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>N°{formatNumber(data.id)}</Text>
          <Text style={styles.infoText}>
            Pokémon {type.charAt(0).toUpperCase() + type.slice(1)}
          </Text>
          <Text style={styles.infoText}>Taille : {data.height / 10}m </Text>
          <Text style={styles.infoText}>Poids : {data.weight / 10}kg </Text>
        </View>
        <View style={styles.statsDetailsContainer}>
          {data.stats.map((stat, index) => (
            <StatsItems
              key={index}
              statName={stat.stat.name}
              statValue={stat.base_stat}
              maxStat={maxStat}
            />
          ))}
        </View>
      </View>
    </LinearGradient>
  );
};

export default PokemonDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    borderRadius: 12,
    borderWidth: 8,
    padding: 15,
    height: 550,
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
    marginHorizontal: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    borderRadius: 12,
    borderTopWidth: 12,
    borderBottomWidth: 22,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    alignItems: 'center',
    width: '100%',
    borderColor: '#c6e0fb',
    position: 'relative',
  },
  name: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 26,
    marginHorizontal: 30,
  },
  pv: {
    fontWeight: 'bold',
    fontSize: 10,
    color: 'black',
    marginRight: 2,
  },
  hp: {
    fontWeight: 'bold',
    fontSize: 26,
    color: 'black',
  },
  image: {
    width: 200,
    height: 200,
  },
  typeIcon: {
    width: 35,
    height: 35,
    top: -4,
  },
  infoContainer: {
    bottom: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  infoText: {
    fontSize: 12,
    color: 'black',
    marginRight: 2,
  },
  statsDetailsContainer: {
    width: '100%',
  },
});
