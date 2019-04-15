import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Platform, NativeModules } from 'react-native';
import { Card } from 'react-native-paper';
import RaceGuarded from './RaceGuarded';
import Race from './Race';

export default class Races extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      races: [],
    }

    this.handleWinner = this.handleWinner.bind(this);
    this.handleDsqTeam = this.handleDsqTeam.bind(this);
  }

  componentDidMount() {
    this.testInit();
  }

  testInit() {
    let races = [];

    for (let i = 1; i < 5; i++) {
      races = [...races, {
          team1: 'SKUM ' + i,
          team2: 'Leeds ' + i,
          division: 'M',
          winner: 0,
          team1Dsq: false,
          team2Dsq: false,
          raceNo: i
      }]
    }

    this.setState({
      races
    })
  }

  handleWinner(raceNo, teamNo) {
    const { races } = this.state;
    const winner = races.find(r => r.raceNo === raceNo)[`team${teamNo}`]

    this.setState({
      message: `race ${raceNo} won by ${winner}`,
      races: Object.assign([],
        races.map(race =>
          raceNo === race.raceNo ? { ...race, winner: teamNo, [`team${teamNo}Dsq`]: false } : race
        )
      )
    });
  }

  handleDsqTeam(raceNo, teamNo) {
    const { races } = this.state;

    const race = races.find(r => r.raceNo === raceNo);
    let winner = race.winner
    if (race.winner === teamNo) {
      winner = teamNo === 1 ? 2 : 1
    }

    const dsqKey = `team${teamNo}Dsq`
    const noDsqKey = `team${winner}Dsq`

    const newRaces = Object.assign([],
      races.map(race => {
        if (raceNo === race.raceNo) {
          return { ...race, [dsqKey]: !race[dsqKey], [noDsqKey]: false, winner }
        }
        
        return race
      })
    );

    const team = teamNo === 1 ? race.team1 : race.team2;

    this.setState({
      message: `race ${raceNo} with DSQ by ${team}`,
      races: newRaces
    });
  }

  render() {
    const { races } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.section}>
            Finished Races (readonly)
          </Text>
          {races.filter(race => race.winner)
            .sort((a, b) => a.raceNo - b.raceNo)
            .map(race => (
              <Race
                key={race.raceNo}
                race={race}
                readonly
              />
            ))
          }
          <Text style={styles.section}>
            Finished Races (guarded)
          </Text>
          {races.filter(race => race.winner)
            .sort((a, b) => a.raceNo - b.raceNo)
            .map(race => (
              <RaceGuarded
                key={race.raceNo}
                race={race}
                onSetWinner={this.handleWinner}
                onDsqTeam={this.handleDsqTeam}
              />
            ))
          }
          <Text style={styles.section}>
            Pending Races
          </Text>
          {races.filter(race => !race.winner)
            .sort((a, b) => a.raceNo - b.raceNo)
            .map(race => (
              <Race
                key={race.raceNo}
                race={race}
                onSetWinner={this.handleWinner}
                onDsqTeam={this.handleDsqTeam}
              />
            ))
          }
          <Text>{this.state.message}</Text>
        </ScrollView>
      </View>
    );
  }
}

const { StatusBarManager } = NativeModules;
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: STATUSBAR_HEIGHT,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  }
});


          // <Text>
          //   Finished Races (Display)
          // </Text>
          // {races
          //   .filter(race => race.winner)
          //   .sort((a, b) => a.raceNo - b.raceNo)
          //   .map(race => <RaceDisplay race={race} />)
          // }