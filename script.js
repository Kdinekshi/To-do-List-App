let tasks = [];

const addTask = () => {
    const tastInput = document.getElementById('taskInput')
    const text = taskInput.value.trim();
    if(text){
        tasks.push({text:text, compeleted: false});
        taskInput.value ="" ;
        updateTaskList();
    }  
};
const updateTaskList = ()=> {
    const taskList = document.getElementById('task-list')
    taskList.innerHTML = ''

    task.forEach(task =>{
        const listItem = document.createElement('li')
        
        listItem.innerHTML = `
        <div class="taskItem">
        <input type = "
        </div>`

    })
}


document.getElementById("submit"),addEventListener('click',function(e){
    e.preventDefault();

    addTask();
     
});
    