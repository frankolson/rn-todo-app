import React from 'react';
import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import EStyleSheet from 'react-native-extended-stylesheet';

import Home from './screens/Home';

const App = () => <Home />;

EStyleSheet.build({
  // later on, global variables will reside here
});

if (__DEV__) { activateKeepAwake(); }
registerRootComponent(App);
