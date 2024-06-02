const todoList = new TodoList();

function addTask(){

    const taskInput= document.getElementById("taskInput");

    const taskText= taskInput.value.trim();

    if(taskText.length>0){
        todoList.addTask(taskText);
        
        todoList.renderTasks();
        taskInput.value=""
       
    }
}

document.getElementById("addBtn").addEventListener('click', addTask);


//what happens when the input box has a value and the enter
document.getElementById("taskInput").addEventListener('keydown',(event)=>{
    if(event.key ==='Enter'){
        addTask();
    }
});

//until the input box is empty button is disabled