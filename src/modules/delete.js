/* eslint-disable import/no-cycle */
import { saveLocalstorage } from './localstorage.js';
import showTasks from './showTasks.js';
import { taskList } from './taskClass.js';

const deleteTask = () => {
  const clearBtn = document.querySelector('#clear');
  clearBtn.addEventListener('click', () => {
    const result = taskList.filter((x) => x.completed === false);
    taskList.splice(0);
    taskList.push(...result);
    saveLocalstorage();
    showTasks();
  });
};

export default deleteTask;