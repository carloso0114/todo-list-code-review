/* eslint-disable import/no-cycle */
import { taskList } from './taskClass.js';
import showTasks from './showTasks.js';

const saveLocalstorage = () => {
  localStorage.setItem('taskListKey', JSON.stringify(taskList));
};

const getLocalstorage = () => {
  if (localStorage.getItem('taskListKey')) {
    const getBooks = JSON.parse(localStorage.getItem('taskListKey'));
    getBooks.forEach((t) => {
      taskList.push(t);
    });
    showTasks();
  }
};

export { getLocalstorage, saveLocalstorage };