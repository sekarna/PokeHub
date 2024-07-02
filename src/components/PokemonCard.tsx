import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Pokemon} from '../utils/pokemonInterface';
import {formatNumber, typesInfo} from '../utils/constants';
import {useQuery} from '@tanstack/react-query';
import {fetchPokemonDetails} from '../services/pokemonService';
import {useNavigation} from '@react-navigation/native';

interface PokemonCardProps {
  name: string;
  url: string;
}

export function PokemonCard({url, name}: PokemonCardProps) {
  const navigation = useNavigation();
  const {data, isLoading, error} = useQuery<Pokemon>({
    queryKey: ['pokemon', url],
    queryFn: () => fetchPokemonDetails(url),
  });

  if (!data) return null;

  const backgroundColor = typesInfo[data.types[0].type.name].color || 'gray';
  const hpStat = data.stats.find(stat => stat.stat.name === 'hp');
  const hp = hpStat ? hpStat.base_stat : 0;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Details', {url, name})}>
      <View style={[styles.card, {backgroundColor, borderColor: '#eee77d'}]}>
        <View style={styles.cardHeader}>
          <View>
            <Text style={styles.name}>
              {data.name.replace(/^\w/, c => c.toUpperCase())}
            </Text>
            <View style={styles.infos}>
              <Text style={styles.pv}>PV</Text>
              <Text style={styles.hp}>{hp}</Text>
              <Image
                style={styles.poke}
                source={require('../assets/poke.png')}
              />
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
    </TouchableOpacity>
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
