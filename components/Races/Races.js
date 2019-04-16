import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import RaceGuarded from './RaceGuarded';
import Race from './Race';

export default class Races extends React.Component {
  constructor(props) {
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

    for (let i = 1; i < 10; i++) {
      races.push({
          team1: 'SKUM ' + i,
          team2: 'Leeds ' + i,
          division: 'M',
          winner: 0,
          team1Dsq: false,
          team2Dsq: false,
          raceNo: i
      });
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
    winner = teamNo === 1 ? 2 : 1

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
      <View>
        <ScrollView>
          {/* <Text style={styles.section}>
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
          } */}
          {/* <Text style={styles.section}>
            Finished Races (guarded)
          </Text> */}
          {/* {races.filter(race => race.winner)
            .sort((a, b) => a.raceNo - b.raceNo)
            .map(race => (
              <RaceGuarded
                key={race.raceNo}
                race={race}
                onSetWinner={this.handleWinner}
                onDsqTeam={this.handleDsqTeam}
              />
            ))
          } */}
          {/* <Text style={styles.section}>
            Pending Races
          </Text> */}
          {races.sort((a, b) => a.raceNo - b.raceNo)
            .map(race => race.winner
              ? (
                <RaceGuarded
                  key={race.raceNo}
                  race={race}
                  onSetWinner={this.handleWinner}
                  onDsqTeam={this.handleDsqTeam}
                />)
              : (
                <Race
                  key={race.raceNo}
                  race={race}
                  onSetWinner={this.handleWinner}
                  onDsqTeam={this.handleDsqTeam}
                />)
              )
          }
          <Text>{this.state.message}</Text>
        </ScrollView>
      </View>
    );
  }
}

Races.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('title', 'BOOM'),
});

          // <Text>
          //   Finished Races (Display)
          // </Text>
          // {races
          //   .filter(race => race.winner)
          //   .sort((a, b) => a.raceNo - b.raceNo)
          //   .map(race => <RaceDisplay race={race} />)
          // }
