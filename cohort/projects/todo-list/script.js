document.addEventListener("DOMContentLoaded", loadTasks); // Load tasks on page load

function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Task cannot be empty!");
        return;
    }

    let taskList = document.getElementById("taskList");

    // Create a new list item
    let li = document.createElement("li");
    li.innerHTML = `${taskText} <button onclick="deleteTask(this)">Delete</button>`;

    // Append to the task list
    taskList.appendChild(li);

    // Save tasks in localStorage
    saveTasks();

    // Clear input field
    input.value = "";
}

function deleteTask(button) {
    button.parentElement.remove();
    saveTasks(); // Update localStorage
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        tasks.push(li.innerText.replace("Delete", "").trim());
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");

    tasks.forEach(taskText => {
        let li = document.createElement("li");
        li.innerHTML = `${taskText} <button onclick="deleteTask(this)">Delete</button>`;
        taskList.appendChild(li);
    });
}
