import React, { Component } from 'react';

import Container from '../components/Container';
import NewTaskButton from '../components/NewTaskButton';

class Home extends Component {
  handleOpenNewTask = () => (
    console.log('New task requested')
  )

  render() {
    return (
      <Container>
        <NewTaskButton
          onPress={this.handleOpenNewTask}
        />
      </Container>
    );
  }
}

export default Home;
