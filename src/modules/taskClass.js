const taskList = [];

class Task {
  constructor(description, id = taskList.length, completed = false) {
    this.description = description;
    this.completed = completed;
    this.id = id;
  }
}

export { taskList, Task };