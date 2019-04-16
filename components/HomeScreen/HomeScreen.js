import React from 'react';
import { Card, Button } from 'react-native-paper';

export default function HomeScreen({ navigation }) {
  const mode = 'contained';

  return (
    <Card>
      <Card.Content>
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
      </Card.Content>
    </Card>
  )
}

HomeScreen.navigationOptions = {
  title: 'Home',
};