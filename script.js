
document.addEventListener('DOMContentLoaded', function() {
   
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
      
        const taskText = taskInput.value.trim();
        
        
        if (!taskText) {
            alert('Please enter a task');
            return; // Exit early to prevent adding empty items
        }
        
        
        const li = document.createElement('li');
        li.textContent = taskText; // Set the visible text of the li
        
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove'; // Button label
        removeBtn.className = 'remove-btn'; 
        
       
        removeBtn.onclick = function() {
            taskList.removeChild(this.parentNode);
        };
  
        li.appendChild(removeBtn);
        
     
        taskList.appendChild(li);
        
        
        taskInput.value = '';
    }

 
    addButton.addEventListener('click', addTask);

   
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

   
    addTask();
});