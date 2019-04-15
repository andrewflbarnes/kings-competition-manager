import React from 'react';
import { Alert } from 'react-native';
import Race from './Race';
  
function finishedGuard(fn) {
  return (...args) => {
    Alert.alert(
      'Race already finished',
      'Are you sure you want to change it?',
      [
        {
          text: 'OK',
          onPress: () => fn(...args)
        },
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
      ],
      {cancelable: false},
    );
  }
}

export default function RaceGuarded({ race, onSetWinner, onDsqTeam }) {
  return <Race race={race} onSetWinner={finishedGuard(onSetWinner)} onDsqTeam={finishedGuard(onDsqTeam)} />
}