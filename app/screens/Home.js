import React, { Component } from 'react';

import Container from '../components/Container';
import NewTaskButton from '../components/NewTaskButton';
import TodoList from '../components/TodoList';
import NoTasks from '../components/NoTasks';
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

  handleToggleCompletion = () => (
    console.log('Task completion toggled')
  )

  handleDelete = () => (
    console.log('Task deletion requested')
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
    const { tasks } = this.state;

    return (
      <Container>
        {tasks.length ? (
          <TodoList
            tasks={tasks}
            onPress={this.handleToggleCompletion}
            onLongPress={this.handleDelete}
          />
        ) : (
          <NoTasks />
        )}

        <NewTaskButton
          onPress={this.handleOpenNewTask}
        />
      </Container>
    );
  }
}

export default Home;
