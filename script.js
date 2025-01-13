 
let tasks = [];
 
const addTask = () => {
    const taskInput = document.getElementById("taskInput");
    const text = taskInput.value.trim();
    if (text) {
        tasks.push({ text: text, completed: false });
        taskInput.value = "";
        updateTaskList();
    }
};
 
const updateTaskList = () => {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");

        listItem.innerHTML = `
            <div>
                <input type="checkbox" ${task.completed ? "checked" : ""} onchange="toggleTask(${index})">
                <span class="${task.completed ? "completed" : ""}">${task.text}</span>
            </div>
            <div class="actions">
                <button onclick="editTask(${index})">✏️</button>
                <button onclick="deleteTask(${index})">🗑️</button>
            </div>
        `;

        taskList.appendChild(listItem);
    });

    updateProgress();
};

 
const toggleTask = (index) => {
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
};

// Delete a task
const deleteTask = (index) => {
    tasks.splice(index, 1);
    updateTaskList();
};

 
const editTask = (index) => {
    const newText = prompt("Edit your task:", tasks[index].text);
    if (newText) {
        tasks[index].text = newText.trim();
        updateTaskList();
    }
};
 
const updateProgress = () => {
    const completedTasks = tasks.filter(task => task.completed).length;
    const progress = (completedTasks / tasks.length) * 100 || 0;

    document.getElementById("progress").style.width = `${progress}%`;
    document.getElementById("numbers").textContent = `${completedTasks}/${tasks.length}`;
};

function updateDateTime() {
    const now = new Date();
    document.getElementById('dateTime').textContent = now.toLocaleString();
}
setInterval(updateDateTime, 1000);
updateDateTime();

 
document.getElementById("taskForm").addEventListener("submit", function (e) {
    e.preventDefault();
    addTask();
});
