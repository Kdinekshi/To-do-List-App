// Task data array
let tasks = [];

// Add a new task
const addTask = () => {
    const taskInput = document.getElementById("taskInput");
    const text = taskInput.value.trim();
    if (text) {
        tasks.push({ text: text, completed: false });
        taskInput.value = "";
        updateTaskList();
    }
};

// Update the task list
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

// Toggle task completion
const toggleTask = (index) => {
    tasks[index].completed = !tasks[index].completed;
    updateTaskList();
};

// Delete a task
const deleteTask = (index) => {
    tasks.splice(index, 1);
    updateTaskList();
};

// Edit a task
const editTask = (index) => {
    const newText = prompt("Edit your task:", tasks[index].text);
    if (newText) {
        tasks[index].text = newText.trim();
        updateTaskList();
    }
};

// Update progress bar and task status
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


// Add event listener for the form
document.getElementById("taskForm").addEventListener("submit", function (e) {
    e.preventDefault();
    addTask();
});
