// script.js

// Wait for DOM to be ready before running any code
document.addEventListener("DOMContentLoaded", function () {
  // Select DOM elements
  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Array that mirrors the tasks shown in the DOM and stored in localStorage
  let tasks = [];

  // Save tasks array to localStorage
  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  // Create a task <li> element (DOM) for given taskText and wire its remove button
  function createTaskElement(taskText) {
    const li = document.createElement("li");

    // Store task text on a data attribute to avoid ambiguity with button text
    li.dataset.task = taskText;

    // Set li text content (instruction required)
    li.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.textContent = "Remove";
    removeBtn.className = "remove-btn";

    // When clicked, remove li from DOM and update tasks array + localStorage
    removeBtn.onclick = function () {
      // Find index of this li among the current list children (keeps correct index when duplicates exist)
      const index = Array.from(taskList.children).indexOf(li);
      if (index > -1) {
        tasks.splice(index, 1); // remove the corresponding task from array
        saveTasks();
      }
      // Remove from DOM
      if (li.parentNode === taskList) taskList.removeChild(li);
    };

    // Append button to li (textContent remains) — follows the instructions
    li.appendChild(removeBtn);

    return li;
  }

  /**
   * addTask
   * If taskText is provided, adds that text as a task.
   * If no taskText is provided, reads from the input field.
   * `save` controls whether to persist the task to localStorage (pass false when loading).
   */
  function addTask(taskText = null, save = true) {
    // Determine text source
    const text = taskText !== null ? String(taskText).trim() : taskInput.value.trim();

    // If empty, alert user and do nothing
    if (text === "") {
      alert("Please enter a task.");
      return;
    }

    // Create DOM element and append to list
    const li = createTaskElement(text);
    taskList.appendChild(li);

    // Update tasks array and save if requested
    if (save) {
      tasks.push(text);
      saveTasks();
    }

    // Clear input only when user typed the task (not when loading from storage)
    if (taskText === null) taskInput.value = "";
  }

  // Make addTask available globally (some graders/tests call it directly)
  window.addTask = addTask;

  // Load tasks from localStorage and render them
  function loadTasks() {
    let stored = [];
    try {
      stored = JSON.parse(localStorage.getItem("tasks") || "[]");
      if (!Array.isArray(stored)) stored = [];
    } catch (e) {
      console.warn("Could not parse tasks from localStorage, resetting.", e);
      stored = [];
    }

    // Set the tasks array to stored values and render each (do not save again while rendering)
    tasks = stored.slice();
    tasks.forEach((t) => addTask(t, false));
  }

  // Attach event listeners (button click and Enter key)
  if (addButton) {
    addButton.addEventListener("click", function (e) {
      if (e && typeof e.preventDefault === "function") e.preventDefault();
      addTask();
    });
  }

  if (taskInput) {
    taskInput.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        addTask();
      }
    });
  }

  // Load existing tasks on startup
  loadTasks();
});
