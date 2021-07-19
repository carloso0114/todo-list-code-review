/* eslint-disable import/no-cycle */
import { taskList } from './taskClass.js';
import sort from './sort.js';
import checkboxListener from './checkbox.js';
import editTask from './editTask.js';

const showTasks = () => {
  const ulSelector = document.querySelector('#taskUl');
  let indexOfCheckboxes = -1;
  ulSelector.innerHTML = '';
  taskList.forEach((e) => {
    indexOfCheckboxes += 1;
    const li = document.createElement('li');
    if (e.completed === true) {
      e.id = indexOfCheckboxes;
      li.innerHTML = `
      <div>
      <input class="checkbox m-2" type="checkbox" id="${indexOfCheckboxes}" checked=true>
      <label class="completed" id="${indexOfCheckboxes}">${e.description}</label>
      </div>
      <i class="fs-5 bi bi-three-dots-vertical draggableicon"></i>
      `;
    } else {
      e.id = indexOfCheckboxes;
      li.innerHTML = `
      <div>
      <input class="checkbox m-2" type="checkbox" id="${indexOfCheckboxes}">
      <label id="${indexOfCheckboxes}">${e.description}</label>
      </div>
      <i class="fs-5 bi bi-three-dots-vertical draggableicon"></i>
      `;
    }
    li.classList.add('list-group-item', 'draggable', 'droppable', 'd-flex', 'justify-content-between', 'align-items-center');
    li.setAttribute('draggable', 'true');
    ulSelector.appendChild(li);
  });
  sort();
  checkboxListener();
  editTask();
};

export default showTasks;
