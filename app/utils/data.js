import { AsyncStorage } from 'react-native';

export function saveTasks(tasks) {
  AsyncStorage.setItem('TASKS', JSON.stringify(tasks));
}

export function getAllTasks(callback) {
  return AsyncStorage.getItem('TASKS', (err, tasks) =>
    convertToArrayOfObjects(tasks, callback)
  );
}

function convertToArrayOfObjects(tasks, callback) {
  return callback(
    tasks ? JSON.parse(tasks).map((task, id) => ({ id, ...task })) : []
  );
}
