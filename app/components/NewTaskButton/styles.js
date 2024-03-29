import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  button: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$primaryColor',
    borderRadius: 30,
    elevation: 5,
  },
});
