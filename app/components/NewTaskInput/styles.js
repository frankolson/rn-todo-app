import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  $iconColor: '$textColor',

  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '$softTextColor',
  },
  input: {
    flex: 1,
    color: '$textColor',
    height: 50,
    paddingHorizontal: 8,
  },
  button: {
    margin: 10,
  },
});
