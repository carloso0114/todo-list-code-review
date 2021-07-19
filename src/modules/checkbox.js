/* eslint-disable import/no-cycle */
// import deleteTask from './delete.js';
import { saveLocalstorage } from './localstorage.js';
import { taskList } from './taskClass.js';

const checkboxListener = () => {
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((e) => {
    e.addEventListener('change', () => {
      const index2 = e.id;
      if (e.checked) {
        taskList[index2].completed = true;
        e.nextSibling.nextSibling.classList.add('completed');
        saveLocalstorage();
      } else {
        taskList[index2].completed = false;
        e.nextSibling.nextSibling.classList.remove('completed');
        saveLocalstorage();
      }
    });
  });
};

export default checkboxListener;