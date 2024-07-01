import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Pokemon} from '../utils/pokemonInterface';
import {formatNumber, typesColors} from '../utils/constants';
import {useQuery} from '@tanstack/react-query';
import { fetchPokemonDetails } from '../services/pokemonService';

interface PokemonCardProps {
  name: string;
  url: string;
}

export function PokemonCard({url, name}: PokemonCardProps) {
  const {data, isLoading, error} = useQuery<Pokemon>({
    queryKey: ['pokemon', url],
    queryFn: () => fetchPokemonDetails(url),
  });
  console.log('details', data);
  

  if (!data) return null;

  const backgroundColor = typesColors[data.types[0].type.name] || 'gray';
  const hpStat = data.stats.find(stat => stat.stat.name === 'hp');
  const hp = hpStat ? hpStat.base_stat : 0;

  return (
    <View style={[styles.card, {backgroundColor, borderColor: '#eee77d'}]}>
      <View style={styles.cardHeader}>
        <View>
          <Text style={styles.name}>
            {data.name.replace(/^\w/, c => c.toUpperCase())}
          </Text>
          <View style={styles.infos}>
            <Text style={styles.pv}>PV</Text>
            <Text style={styles.hp}>{hp}</Text>
            <Image style={styles.poke} source={require('../assets/poke.png')} />
          </View>
        </View>
        <Image
          source={{
            uri: data?.sprites?.other['official-artwork']?.front_default,
          }}
          style={styles.image}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    borderWidth: 6,
    marginBottom: 40,
    padding: 15,
    width: '90%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'flex-end',
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    width: 130,
    height: 130,
  },
  name: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 8,
  },
  pv: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
    marginRight: 2,
  },
  hp: {
    fontWeight: 'bold',
    fontSize: 12,
    color: 'black',
  },
  infos: {flexDirection: 'row', marginTop: 10},
  poke: {width: 40, height: 30, left: 45, bottom: -5, position: 'absolute'},
});
