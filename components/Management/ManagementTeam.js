import React from 'react';
import { View } from 'react-native';
import { Card, Text, List } from 'react-native-paper';
import styles from '../styles';

export default class ManagementTeam extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    // TODO react-navigation-props-mapper package.
    const name = navigation.getParam('name');
    const division = navigation.getParam('division');

    return (
      <View>
        <Card>
          <Card.Content>
            <Text>Name: {name}</Text>
            <Text>Division: {division}</Text>
          </Card.Content>
        </Card>
      </View>
    )
  }
}

ManagementTeam.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('name')
});

