import React from 'react';
import { List } from 'react-native-paper';

export default class ManagementClub extends React.Component {
  constructor(props) {
    super(props);

    this._onPress = this._onPress.bind(this);
  }

  _onPress(team) {
    return () => {
      const { navigation } = this.props;
      navigation.navigate('ManagementTeam', { name: team.name, division: team.division });
    }
  }

  render() {
    const { name, league, teams } = this.props;
    const divisions = [ ...new Set(teams.map(t => t.division))];

    return (
      <List.Accordion
        title={`${name} (${league})`}
        // left={props => <List.Icon {...props} icon="folder"/>}
      >
        {divisions.map(division => (
          <List.Section key={division}>
            <List.Subheader>{division}</List.Subheader>
            {teams.filter(team => team.division === division)
              .map(team => (
                <List.Item
                  key={`${team.name}_${team.division}`}
                  title={team.name}
                  onPress={this._onPress(team)}
                />
            ))}
            </List.Section>
        ))}
      </List.Accordion>
    )
  }
}
