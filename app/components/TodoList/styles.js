import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  $iconColor: '$softTextColor',
  $completedTextColor: '$softTextColor',
  $buttonPressColor: '$highlightColor',

  row: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '$backgroundColor',
  },
  text: {
    marginLeft: 16,
    color: '$textColor',
  },
  separator: {
    flex: 1,
    backgroundColor: '$borderColor',
    height: StyleSheet.hairlineWidth + 1,
  }
});
