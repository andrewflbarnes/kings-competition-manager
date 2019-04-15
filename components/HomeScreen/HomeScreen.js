import React from 'react';
import { View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Button
        title='Seeding'
        onPress={() => {navigation.navigate('Seeding')}}
      />
      <Button
        title='Management'
        onPress={() => {navigation.navigate('Management')}}
      />
      <Button
        title='Round 1'
        onPress={() => {navigation.navigate('Round2')}}
      />
      <Button
        title='Round 2'
        onPress={() => {navigation.navigate('Round2')}}
      />
      <Button
        title='Knockouts'
        onPress={() => {navigation.navigate('Knockouts')}}
      />
    </View>
  )
}

HomeScreen.navigationOptions = {
  title: 'Home',
};