const todoList = new TodoList();
const addBtnButton = document.getElementById("addBtn");
const counterBtn = document.getElementById("counterCountainer");



function addTask() {
  const taskInput = document.getElementById("taskInput");

  const taskText = taskInput.value.trim();

  if (taskText.length > 0) {
    todoList.addTask(taskText);

    todoList.renderTasks();
    taskInput.value = "";
  }
}


counterBtn.innerText=getTotalTask();
addBtnButton.addEventListener("click", addTask);

//what happens when the input box has a value and the enter
document.getElementById("taskInput").addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  todoList.loadTaskFromLocal();
});
