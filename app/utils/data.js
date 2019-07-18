import { AsyncStorage } from 'react-native';

function getAllTasks(callback) {
  return AsyncStorage.getItem('TASKS', (err, tasks) =>
    convertToArrayOfObject(tasks, callback)
  );
}

function saveTasks(tasks) {
  AsyncStorage.setItem('TASKS', convertToStringWithSeparators(tasks));
}

function convertToArrayOfObject(tasks, callback) {
  return callback(
    tasks ? JSON.parse(tasks).map((task, i) => ({ id: i.toString(), ...task })) : []
  );
}

function convertToStringWithSeparators(tasks) {
  return JSON.stringify(tasks.map(({ id, ...rest }) => rest));
}

export {
  getAllTasks,
  saveTasks,
};
