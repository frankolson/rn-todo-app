import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 20,
  },
  text: {
    fontSize: 24,
    color: '$softTextColor',
    textAlign: 'center',
  },
});
