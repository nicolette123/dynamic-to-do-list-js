// script.js

// Run code after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a task
  function addTask() {
    const taskText = taskInput.value.trim(); // get input value

    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }

    // Create <li> for the task
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create Remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Add event to remove the task
    removeBtn.onclick = () => {
      taskList.removeChild(li);
    };

    // Append remove button to li, then li to ul
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
  }

  // Event listener for button
  addButton.addEventListener('click', addTask);

  // Event listener for Enter key
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
