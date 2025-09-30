// script.js

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Create a new li element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = "remove-btn";

        // Remove the task on click
        removeBtn.onclick = function () {
            taskList.removeChild(li);
        };

        // Append remove button to li, then li to list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear input
        taskInput.value = "";
    }
}

// Wait for DOM to load before attaching events
document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');

    // Add task on button click
    addButton.addEventListener('click', addTask);

    // Add task on Enter key
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
