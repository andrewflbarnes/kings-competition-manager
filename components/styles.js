import { StyleSheet } from 'react-native';

const raceCommon = {
  flexShrink: 0,
  flexBasis: 0,
  textAlign: 'center',
};

// const { StatusBarManager } = NativeModules;
// const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    // backgroundColor: '#222222',
    padding: 8,
  },
  cardFlexRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  normal: {
    flexGrow: 3,
    ...raceCommon,
  },
  small: {
    flexGrow: 1,
    ...raceCommon,
  },
  dsq: {
    flexGrow: 1,
    ...raceCommon,
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
  }
});

export default styles;