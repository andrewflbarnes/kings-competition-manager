import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Card } from 'react-native-paper';

const defaultProps = {
  onSetWinner: () => {},
  onDsqTeam: () => {},
  readonly: false,
}

export default function Race({ race, onSetWinner, onDsqTeam, readonly }) {
  const { raceNo, division, team1, team2, winner, team1Dsq, team2Dsq } = race;

  const team1Color = winner === 1
    ? 'green'
    : team1Dsq ? 'red' : '';
  const team2Color = winner === 2
    ? 'green'
    : team2Dsq ? 'red' : '';

  const handleTeam1Dsq = () => onDsqTeam(raceNo, 1);
  const handleTeam2Dsq = () => onDsqTeam(raceNo, 2);

  const handleTeam1Win = () => onSetWinner(raceNo, 1);
  const handleTeam2Win = () => onSetWinner(raceNo, 2);

  return (
    <Card>
      <View style={styles.container}>
        <Text style={styles.small}>{raceNo}</Text>
        <Text style={styles.small}>{division}</Text>
        {!readonly && (
          <View style={styles.dsq} >
            <Button
              title='D'
              onPress={handleTeam1Dsq}
              color='red' />
          </View>
        )}
        <View style={styles.normal} >
          <Button
            title={team1}
            onPress={handleTeam1Win}
            color={team1Color} />
        </View>
        <Text style={styles.small}>vs</Text>
        <View style={styles.normal} >
          <Button
            title={team2}
            onPress={handleTeam2Win}
            color={team2Color} />
        </View>
        {!readonly && (
          <View style={styles.dsq} >
            <Button
              title='D'
              onPress={handleTeam2Dsq}
              color='red' />
          </View>
        )}
        <Text style={styles.small}>{division}</Text>
        <Text style={styles.small}>{raceNo}</Text>
      </View>
    </Card>
  )
}

Race.defaultProps = defaultProps

const styleDefault = {
  flexShrink: 0,
  flexBasis: 0,
  textAlign: 'center',
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  normal: {
    flexGrow: 5,
    ...styleDefault,
  },
  small: {
    flexGrow: 1,
    ...styleDefault,
  },
  dsq: {
    flexGrow: 2,
    ...styleDefault,
  },
});