import React from 'react';
import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

const App = () => <Home />;

EStyleSheet.build({
  $primaryColor: '#F44336',
  $borderColor: '#424242',
  $backgroundColor: '#212121',
  $highlightColor: '#BDBDBD',
  $textColor: '#FAFAFA',
  $softTextColor: '#757575',
});

if (__DEV__) { activateKeepAwake(); }
registerRootComponent(App);
