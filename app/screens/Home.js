import React, { Component } from 'react';

import Container from '../components/Container';
import NewTaskButton from '../components/NewTaskButton';
import { getAllTasks, saveTasks } from '../utils/data';

class Home extends Component {
  state = {
    tasks: [],
  }

  componentDidMount() {
    getAllTasks(tasks => this.setState({ tasks: tasks || [] }));
  }

  handleOpenNewTask = () => (
    console.log('New task requested')
  )

  deleteTask = (id) => (
    this.setState({
      tasks: this.state.tasks.reduce((tasks, task) => {
        if (task.id !== id) { tasks.push(task); }
        return tasks;
      }, [])
    }, () => saveTasks(this.state.tasks))
  );

  addTask = (input) => {
    const { tasks } = this.state;

    this.setState({
      tasks: [
        ...tasks,
        { id: (tasks.length + 1).toString(), completed: false, name: input }
      ],
      addingNewTask: false,
    }, () => saveTasks(this.state.tasks))
  }

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
