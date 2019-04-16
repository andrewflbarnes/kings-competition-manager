import React from 'react';
import { View } from 'react-native';
import { Card, Button, Text } from 'react-native-paper';
import styles from '../styles';

const defaultProps = {
  onSetWinner: () => {},
  onDsqTeam: () => {},
  readonly: false,
}

export default function Race({ race, onSetWinner, onDsqTeam, readonly }) {
  const { raceNo, division, team1, team2, winner, team1Dsq, team2Dsq } = race;
  const { winColor, dsqColor } = styles;

  const team1Color = winner === 1
    ? winColor
    : team1Dsq ? dsqColor : '';
  const team2Color = winner === 2
    ? winColor
    : team2Dsq ? dsqColor : '';

  const handleTeam1Dsq = () => onDsqTeam(raceNo, 1);
  const handleTeam2Dsq = () => onDsqTeam(raceNo, 2);

  const handleTeam1Win = () => onSetWinner(raceNo, 1);
  const handleTeam2Win = () => onSetWinner(raceNo, 2);

  return (
    <Card>
      <View style={styles.cardFlexRow}>
      {/* <Card.Content style={styles.cardFlexRow}> */}
        <Text style={styles.small}>{raceNo}</Text>
        <Text style={styles.small}>{division}</Text>
        {!readonly && (
          <Button
            compact
            style={styles.dsq}
            onPress={handleTeam1Dsq}
            color='red'>
            D
          </Button>
        )}
        <Button
          compact
          style={styles.normal}
          onPress={handleTeam1Win}
          color={team1Color}>
          {team1}
        </Button>
        <Text style={styles.small}>vs</Text>
        <Button
          compact
          style={styles.normal}
          onPress={handleTeam2Win}
          color={team2Color}>
          {team2}
        </Button>
        {!readonly && (
          <Button
            compact
            style={styles.dsq}
            onPress={handleTeam2Dsq}
            color='red'>
            D
          </Button>
        )}
        <Text style={styles.small}>{division}</Text>
        <Text style={styles.small}>{raceNo}</Text>
      {/* </Card.Content> */}
      </View>
    </Card>
  )
}

Race.defaultProps = defaultProps