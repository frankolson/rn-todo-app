import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  list: {},
  separator: {
    flex: 1,
    backgroundColor: '$borderColor',
    height: StyleSheet.hairlineWidth + 1,
  }
});
