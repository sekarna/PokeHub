import {View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import PokemonList from '../components/PokemonList';

const PokemonListScreen = () => {
  return (
    <LinearGradient colors={['#1c1c1c', '#000000']} style={styles.container}>
      <PokemonList />
    </LinearGradient>
  );
};

export default PokemonListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
