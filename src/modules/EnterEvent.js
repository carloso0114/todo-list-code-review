import showTasks from './showTasks.js';
import { saveLocalstorage } from './localstorage.js';
import { Task, taskList } from './taskClass.js';

const EnterEvent = () => {
  const inputSelector = document.querySelector('#inputTask');
  inputSelector.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      const task = new Task(inputSelector.value);
      taskList.push(task);
      showTasks();
      saveLocalstorage();
      inputSelector.value = '';
    }
  });
  const inputIcon = document.querySelector('.bi-arrow-return-left');
  inputIcon.addEventListener('click', () => {
    const task = new Task(inputSelector.value);
    taskList.push(task);
    showTasks();
    saveLocalstorage();
    inputSelector.value = '';
  });
};

export default EnterEvent;