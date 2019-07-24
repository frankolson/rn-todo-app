import React, { Component } from 'react';
import { TouchableOpacity, TextInput, View, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

class NewTaskInput extends Component {
  state = {
    input: '',
  }

  handleChange = (input) => (
    this.setState({ input })
  )

  handleSubmit = () => (
    this.props.onSubmitEditing(this.state.input)
  )

  render() {
    return (
      <View style={styles.container} onBlur={this.props.onEndEditing}>
        <TextInput
          style={styles.input}
          value={this.state.input}
          placeholder="Add a task"
          onChangeText={this.handleChange}
          onSubmitEditing={this.handleSubmit}
          autoFocus={true}
        />

        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Ionicons
            size={28}
            color={styles.$iconColor}
            name={`${ICON_PREFIX}-send`}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

NewTaskInput.propTypes = {
  onEndEditing: PropTypes.func.isRequired,
  onSubmitEditing: PropTypes.func.isRequired,
}

export default NewTaskInput;
