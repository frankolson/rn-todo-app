import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  $iconColor: '$softTextColor',
  $completedTextColor: '$softTextColor',
  $buttonPressColor: '$highlightColor',

  row: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '$backgroundColor',
  },
  text: {
    marginLeft: 16,
    color: '$textColor',
  },
});
