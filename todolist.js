class TodoList {
  constructor() {
    this.tasks = [];
    this.total = 0;
  }

  addTask(taskText) {
    const task = {
      text: taskText,
    };

    this.tasks.push(task);
    
   

    this.saveTaskToLocal();
    this.renderTasks();
  }

  //buttons functionalities edit

  editTask(index, newTask) {
    this.tasks[index].text = newTask;

    this.saveTaskToLocal();
    this.renderTasks();
  }

  //delete button

  deleteTask(index) {
    this.tasks.splice(index, 1);
    this.saveTaskToLocal();
   
    this.renderTasks();
  }

  //localStorage functions

  saveTaskToLocal() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  loadTaskFromLocal() {
    const storedTask = localStorage.getItem("tasks");

    this.tasks = JSON.parse(storedTask) || [];
    this.total = this.tasks.length;
    this.renderTasks();
  }

  //get the function that append the ul to display the li + buttons
  renderTasks() {
    const taskList = document.getElementById("taskList");
    console.log(this.total);
    if (this.total === 0) {
      taskList.classList.remove("add-shadow");
    } else {
      taskList.classList.add("add-shadow");
    }

    taskList.innerHTML = "";

    this.tasks.forEach((task, index) => {
      const listDiv = document.createElement("div");
      listDiv.classList.add("list-items");

      //   the todoList instance is from the other js
      listDiv.innerHTML = `<li class="item" >
           ${task.text}</li><div class="action-btn"><button class="btn btn-edit" onClick="todoList.editTask(${index}, prompt('Edit task:','${task.text}'))">Edit</button>
           <button class="btn btn-delete" onClick="todoList.deleteTask(${index})">Delete</button>
`;

      taskList.appendChild(listDiv);
      this.total += this.total;
    });
  }
}
