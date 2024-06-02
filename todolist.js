class TodoList{

    constructor(){
this.tasks=[];
    }

    addTask(taskText){
        const task={
            text:taskText
        }

        this.tasks.push(task);
        this.renderTasks();
    }


    //get the function that append the ul to display the li + buttons
    renderTasks(){
        const taskList= document.getElementById("taskList");
        taskList.innerHTML='';
    }
}