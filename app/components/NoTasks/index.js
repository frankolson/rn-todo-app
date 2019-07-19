import React from 'react';
import { Text, ScrollView } from 'react-native';

import styles from './styles';

const NoTasks = () => (
  <ScrollView //on Blur fix: https://github.com/facebook/react-native/issues/11071#issuecomment-360172214
    contentContainerStyle={styles.container}
    scrollEnabled={false}
    keyboardShouldPersistTaps="handled"
  >
    <Text style={styles.text}>
      You don't have any tasks yet. Let's create some!
    </Text>
  </ScrollView>
);

export default NoTasks;
