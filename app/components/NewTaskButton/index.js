import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

const NewTaskButton = ({ onPress }) => (
  <TouchableOpacity
    style={styles.button}
    activeOpacity={0.7}
    onPress={onPress}
  >
    <Ionicons
      name={`${ICON_PREFIX}-add`}
      size={28}
      color="white"
    />
  </TouchableOpacity>
);

NewTaskButton.propTypes = {
  onPress: PropTypes.func.isRequired,
}

export default NewTaskButton;
