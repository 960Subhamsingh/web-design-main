// script.js

// Get the DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Add Task function
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        // Create a new list item (li) for the task
        const newTask = document.createElement("li");

        // Add the task text to the new list item
        newTask.textContent = taskText;

        // Create a delete button for the task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete");

        // Add event listener for deleting the task
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(newTask);
        });

        // Append the delete button to the list item
        newTask.appendChild(deleteButton);

        // Add event listener to mark the task as completed
        newTask.addEventListener("click", function () {
            newTask.classList.toggle("completed");
        });

        // Add the new task to the task list
        taskList.appendChild(newTask);

        // Clear the input field
        taskInput.value = "";
    }
}

// Event listener for the "Add Task" button
addTaskButton.addEventListener("click", addTask);

// Optional: Allow pressing "Enter" to add a task
taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
});