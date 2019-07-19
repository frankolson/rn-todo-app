import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import Task from '../Task';
import Separator from './Separator';
import styles from './styles';

const TodoList = ({ onPress, onLongPress, tasks }) => (
  <FlatList
    style={styles.list}
    data={tasks}
    renderItem={({ item }) => (
      <Task
        onPress={onPress}
        onLongPress={onLongPress}
        task={item}
      />
    )}
    keyExtractor={item => item.id}
    ItemSeparatorComponent={Separator}
  />
);

TodoList.propTypes = {
  onPress: PropTypes.func.isRequired,
  onLongPress: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
}

export default TodoList;
