import './style.css';
import { getLocalstorage } from './modules/localstorage.js';
import EnterEvent from './modules/EnterEvent.js';
import deleteTask from './modules/delete.js';

getLocalstorage();
EnterEvent();
deleteTask();
