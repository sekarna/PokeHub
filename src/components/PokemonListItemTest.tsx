import React, {useState, useEffect} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {PokemonCardProps, PokemonDetail} from '../utils/pokemonInterface';
import {formatNumber, typesColors} from '../utils/constants';

export function PokemonListItem({url, name}: PokemonCardProps) {
  const [pokemon, setPokemon] = useState<PokemonDetail>();

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setPokemon(data);
      });
  }, [url]);

  if (!pokemon) return null;

  const backgroundColor = typesColors[pokemon.types[0].type.name] || 'gray';
  const hpStat = pokemon.stats.find(stat => stat.stat.name === 'hp');
  const hp = hpStat ? hpStat.base_stat : 0;

  return (
    <View style={[styles.card, {backgroundColor, borderColor: '#eee77d'}]}>
      <View style={styles.cardHeader}>
        <Text style={styles.name}>
          {pokemon.name.replace(/^\w/, c => c.toUpperCase())}
        </Text>
        <View style={styles.statsContainer}>
          <Text style={styles.pv}>PV</Text>
          <Text style={styles.hp}>{hp}</Text>
        </View>
      </View>
      <View style={styles.cardImage}>
        <Image
          source={{
            uri: pokemon?.sprites?.other['official-artwork']?.front_default,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.id}>N°{formatNumber(pokemon.id)}</Text>
        <Text style={styles.infoText}>Taille: {pokemon.height / 10}m</Text>
        <Text style={styles.infoText}>Poids: {pokemon.weight / 10}kg</Text>
      </View>
      <Image style={styles.poke} source={require('../assets/poke.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    borderWidth: 8,
    marginBottom: 30,
    padding: 15,
    width: '45%',
    height: 270,
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginHorizontal: '2.5%',
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
    top: 5,
    borderRadius: 12,
    borderTopWidth: 6,
    borderBottomWidth: 12,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    alignItems: 'center',
    width: 140,
    borderColor: '#c6e0fb',
  },
  image: {
    width: 100,
    height: 100,
  },
  infoContainer: {
    bottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

    paddingTop: 5,
  },
  infoText: {
    fontSize: 6,
    color: 'black',
    marginRight: 2,
  },
  name: {
    fontWeight: 'bold',
    color: 'black',
  },
  pv: {
    fontWeight: 'bold',
    fontSize: 10,
    color: 'black',
    marginRight: 2,
  },
  hp: {
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
  id: {
    fontSize: 6,
    color: 'black',
    marginRight: 2,
  },
  poke: {
    width: 80,
    height: 80,
  },
});
