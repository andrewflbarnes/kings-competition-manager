import React from 'react';
import { View } from 'react-native';
import { Card, Button, Text } from 'react-native-paper';
import styles from '../styles';

export default function HomeScreen({ navigation }) {
  const mode = 'outlined';

  return (
    <View styles={styles.container}>
      <Card>
        <Button
          onPress={() => {navigation.navigate('Seeding')}}
          mode={mode} >
          Seeding
        </Button>
        <Button
          onPress={() => {navigation.navigate('Management')}}
          mode={mode} >
          Management
        </Button>
        <Button
          onPress={() => {navigation.navigate('Round1', { title: 'Round 1' })}}
          mode={mode} >
          Round 1
        </Button>
        <Button
          onPress={() => {navigation.navigate('Round2', { title: 'Round 2' })}}
          mode={mode} >
          Round 2
        </Button>
        <Button
          onPress={() => {navigation.navigate('Knockouts', { title: 'Knockouts' })}}
          mode={mode} >
          Knockouts
        </Button>
      </Card>
    </View>
  )
}

HomeScreen.navigationOptions = {
  title: 'Home',
};