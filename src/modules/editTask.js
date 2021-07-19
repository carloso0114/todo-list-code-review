/* eslint-disable import/no-cycle */
import { saveLocalstorage } from './localstorage.js';
import showTasks from './showTasks.js';
import { taskList } from './taskClass.js';

const editTask = () => {
  const labelSelector = document.querySelectorAll('label[id]');
  const icon = document.createElement('i');
  icon.classList.add('bi', 'bi-trash', 'fs-5');
  const newInput = document.createElement('input');
  newInput.classList.add('no-border');
  newInput.setAttribute('type', 'text');
  labelSelector.forEach((e) => {
    e.addEventListener('click', (event) => {
      newInput.setAttribute('id', `${event.target.id}`);
      newInput.value = `${event.target.innerText}`;
      event.target.parentNode.append(newInput);
      newInput.focus();
      icon.setAttribute('id', `${event.target.id}`);
      event.target.parentNode.nextSibling.parentNode.append(icon);
      icon.addEventListener('click', () => {
        taskList.splice(e.id, 1);
        saveLocalstorage();
        showTasks();
      });
      event.target.parentNode.nextSibling.nextSibling.remove();
      newInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          taskList[e.id].description = newInput.value;
          saveLocalstorage();
          showTasks();
        }
      });
      event.target.remove();
    });
  });
};

export default editTask;