/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import Races from './components/Races';
import HomeScreen from './components/HomeScreen';
import Management from './components/Management';
import ManagementTeam from './components/Management/ManagementTeam';
import Seeding from './components/Seeding';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import styles from './components/styles';

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

const MainNavigator = createStackNavigator({
  Navigation: {screen: HomeScreen},
  Seeding: {screen: Seeding},
  Management: {screen: Management},
  ManagementTeam: {screen: ManagementTeam},
  Round1: {screen: Races},
  Round2: {screen: Races},
  Knockouts: {screen: Races},
});

// export default App = createAppContainer(MainNavigator);
const UnthemedApp = createAppContainer(MainNavigator);

const { primaryColor } = styles;

const theme = {
  ...DefaultTheme,
  // roundness: 2,
  // dark: true,
  colors: {
    ...DefaultTheme.colors,
    primary: primaryColor,
  //   background: '#222222',
  //   surface: '#333333',
  //   accent: '#f1c40f',
  //   text: '#cccccc'
  }
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <UnthemedApp />
    </PaperProvider>
  );
}