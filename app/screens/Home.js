import React, { Component } from 'react';
import { KeyboardAvoidingView } from 'react-native';

import Container from '../components/Container';
import NewTaskButton from '../components/NewTaskButton';
import TodoList from '../components/TodoList';
import NoTasks from '../components/NoTasks';
import NewTaskInput from '../components/NewTaskInput';
import { getAllTasks, saveTasks } from '../utils/data';

class Home extends Component {
  state = {
    addingNewTask: false,
    tasks: [],
  }

  componentDidMount() {
    getAllTasks(tasks => this.setState({ tasks: tasks || [] }));
  }

  handleOpenNewTask = () => (
    console.log('New task requested')
  )

  handleCloseNewTask = () => (
    console.log('Done working with new task')
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
    const { addingNewTask, tasks } = this.state;

    this.setState({
      tasks: [
        ...tasks,
        { id: (tasks.length + 1).toString(), completed: false, name: input }
      ],
      addingNewTask: false,
    }, () => saveTasks(this.state.tasks))
  }

  render() {
    const { addingNewTask, tasks } = this.state;

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

        {!addingNewTask && <NewTaskButton onPress={this.handleOpenNewTask} />}

        {addingNewTask && (
          <KeyboardAvoidingView behavior="padding">
            <NewTaskInput
              onSubmitEditing={this.addTask}
              onEndEditing={this.handleCloseNewTask}
            />
          </KeyboardAvoidingView>
        )}
      </Container>
    );
  }
}

export default Home;
