// script.js

// Ensure code runs only after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a task
  function addTask() {
    // Get and trim input value
    const taskText = taskInput.value.trim();

    // If empty, alert and return
    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }

    // Create li for the new task
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // When clicked, remove the task
    removeBtn.onclick = () => {
      taskList.removeChild(li);
    };

    // Append button inside li
    li.appendChild(removeBtn);

    // Append li to ul
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = '';
  }

  // Event listener for Add Task button
  addButton.addEventListener('click', addTask);

  // Event listener for Enter key
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
