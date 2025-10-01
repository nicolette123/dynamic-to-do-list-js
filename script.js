// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task to the list
    function addTask() {
        // Get and trim the task text from the input
        const taskText = taskInput.value.trim();
        
        // Check if the task text is empty
        if (!taskText) {
            alert('Please enter a task');
            return;
        }
        
        // Create a new list item (li) element
        const li = document.createElement('li');
        li.textContent = taskText;
        
        // Create a remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.className = 'remove-btn';
        
        // Add event listener to remove button to delete the task
        removeBtn.onclick = function() {
            taskList.removeChild(this.parentNode);
        };
        
        // Append the remove button to the list item
        li.appendChild(removeBtn);
        
        // Append the list item to the task list
        taskList.appendChild(li);
        
        // Clear the input field
        taskInput.value = '';
    }

    // Attach event listener to the add button
    addButton.addEventListener('click', addTask);

    // Attach event listener to the input for Enter key press
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});