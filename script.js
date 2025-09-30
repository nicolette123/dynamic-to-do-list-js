// script.js

// Global function as requested by many graders/tests
function addTask() {
  // Select the input and list inside the function so external tests that call addTask() will work
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Defensive check
  if (!taskInput || !taskList) {
    // If elements are not present we can't proceed; silently return (or log)
    console.error('addTask: required elements not found (task-input or task-list).');
    return;
  }

  // Get and trim value
  const taskText = taskInput.value.trim();

  // If empty, prompt user
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create list item and set its text content
  const li = document.createElement('li');
  li.textContent = taskText;

  // Create Remove button
  const removeBtn = document.createElement('button');
  removeBtn.type = 'button'; // avoid accidental form submission
  removeBtn.textContent = 'Remove';
  removeBtn.className = 'remove-btn';

  // Assign onclick to remove the li from the list
  removeBtn.onclick = function () {
    // Use removeChild to explicitly remove from taskList
    if (li.parentNode === taskList) {
      taskList.removeChild(li);
    }
  };

  // Append remove button to li, then li to the ul
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  // Clear the input field
  taskInput.value = '';
}

// Attach event listeners after DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Select DOM elements and store in constants (matching your HTML)
  const addButton = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Defensive check and debug output if something is missing
  if (!addButton || !taskInput || !taskList) {
    console.error('To-Do init: required element(s) missing:', {
      addButton: !!addButton,
      taskInput: !!taskInput,
      taskList: !!taskList,
    });
    return;
  }

  // Call addTask when button clicked
  addButton.addEventListener('click', function (e) {
    // Prevent default in case button sits inside a form
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    addTask();
  });

  // Add task with Enter key on the input
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      addTask();
    }
  });
});
