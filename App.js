/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import Races from './components/Races';
import HomeScreen from './components/HomeScreen';
import Hello from './components/Hello';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Navigation: {screen: HomeScreen},
  Seeding: {screen: Hello},
  Management: {screen: Hello},
  Round1: {screen: Races},
  Round2: {screen: Races},
  Knockouts: {screen: Races},
});

export default App = createAppContainer(MainNavigator);