document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // ✅ Save all tasks to localStorage
    function saveTasks() {
        const tasks = [];
        taskList.querySelectorAll('li').forEach(li => {
            // Get only text content (ignore the remove button)
            tasks.push(li.firstChild.textContent);
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // ✅ Load tasks from localStorage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        storedTasks.forEach(taskText => {
            const li = document.createElement('li');
            li.textContent = taskText;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remove';
            removeBtn.classList.add('remove-btn');

            removeBtn.onclick = function() {
                taskList.removeChild(this.parentNode);
                saveTasks(); // Update localStorage after removal
            };

            li.appendChild(removeBtn);
            taskList.appendChild(li);
        });
    }

    // ✅ Add a new task and save it
    function addTask() {
        const taskText = taskInput.value.trim();
        if (!taskText) {
            alert('Please enter a task');
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn');

        removeBtn.onclick = function() {
            taskList.removeChild(this.parentNode);
            saveTasks(); // Update after removing
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);
        taskInput.value = '';

        saveTasks(); // ✅ Save tasks after adding
    }

    // ✅ Event listeners
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // ✅ Load saved tasks when page loads
    loadTasks();
});
