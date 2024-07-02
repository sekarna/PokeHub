import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PokemonListScreen from '../screens/PokemonListScreen';
import PokemonDetailsScreen from '../screens/PokemonDetailsScreen';
import CustomHeader from '../components/CustomHeader';

const RootStack = createNativeStackNavigator();

const RootNavigator = (): React.JSX.Element => {
  return (
    <RootStack.Navigator initialRouteName="List">
      <RootStack.Screen
        name="List"
        component={PokemonListScreen}
        options={{headerShown: false}}
      />
      <RootStack.Screen
        name="Details"
        component={PokemonDetailsScreen}
        options={{
          header: () => <CustomHeader />, 
        }}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
