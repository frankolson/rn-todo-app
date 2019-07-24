import React from 'react';
import { Text, View, Platform, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

const Task = ({ onPress, onLongPress, task }) => {
  const textStyles = [styles.text];

  if (task.completed) {
    textStyles.push({ color: styles.$completedTextColor })
  }

  return (
    <TouchableHighlight
      onPress={() => onPress(task.id)}
      onLongPress={() => onLongPress(task.id)}
      underlayColor={styles.$buttonPressColor}
    >
      <View style={styles.row}>
        <Ionicons
          name={`${ICON_PREFIX}-${task.completed ? 'checkmark-circle-outline' : 'radio-button-off'}`}
          color={styles.$iconColor}
          size={32}
        />

        <Text style={textStyles}>
          {task.name}
        </Text>
      </View>
    </TouchableHighlight>
  );
}

Task.propTypes = {
  onPress: PropTypes.func.isRequired,
  onLongPress: PropTypes.func.isRequired,
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
}

export default Task;
