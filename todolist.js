class TodoList {
  constructor() {
    this.tasks = [];
  }

  addTask(taskText) {
    const task = {
      text: taskText,
    };

    this.tasks.push(task);
    this.renderTasks();
  }

  //get the function that append the ul to display the li + buttons
  renderTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    this.tasks.forEach((task, index) => {
      const listDiv = document.createElement("div");
      listDiv.classList.add("list-items");

      listDiv.innerHTML = `<li class="item" >
           ${task.text}</li>
<div class="action-btn"><button class="btn btn-edit" onClick={editTask}>Edit</button>
           <button class="btn btn-delete" onClick={deleteTask}>Delete</button>
`;

      taskList.appendChild(listDiv);
      console.log(listDiv);
    });
  }
}
