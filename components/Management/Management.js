import React from 'react';
import { ScrollView } from 'react-native';
import ManagementClub from './ManagementClub';

export default class Management extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clubs: []
    }
    this.testInit = this.testInit.bind(this);
  }
  
  componentDidMount() {
    this.testInit();
  }

  testInit() {
    this.setState({
      clubs: [
        {
          name: 'SKUM',
          league: 'Northern',
          teams: [
            {
              name: 'SKUM 1',
              division: 'Mixed'
            },
            {
              name: 'SKUM 2',
              division: 'Mixed'
            },
            {
              name: 'SKUM 3',
              division: 'Mixed'
            },
            {
              name: 'SKUM 1',
              division: 'Ladies'
            },
            {
              name: 'SKUM 1',
              division: 'Board'
            }
          ]
        },
        {
          name: 'Leeds',
          league: 'Northern',
          teams: [
            {
              name: 'Leeds 1',
              division: 'Mixed'
            },
            {
              name: 'Leeds 1',
              division: 'Ladies'
            },
            {
              name: 'Leeds 1',
              division: 'Board'
            },
            {
              name: 'Leeds 2',
              division: 'Board'
            },
            {
              name: 'Leeds 3',
              division: 'Board'
            }
          ]
        }
      ]
    })
  }

  render() {
    const { clubs } = this.state;
    const { navigation } = this.props;
    return (
      <ScrollView>
          {clubs.map(club =>(
            <ManagementClub
              key={`${club.name}_${club.league}`}
              name={club.name} league={club.league}
              teams={club.teams}
              navigation={navigation} />
          ))}
      </ScrollView>
    )
  }
}

Management.navigationOptions = {
  title: 'Club Management'
};
