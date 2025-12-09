//  variables
let tasks = []; // task list
// DOM elements
let input = document.getElementById("taskInput");
let addBtn = document.getElementById("addButton");
let taskList = document.getElementById("taskList");
let searchInput = document.getElementById("searchInput");
let totalTasksSpan = document.getElementById("totalTasks");
let completedTasksSpan = document.getElementById("completedTasks");
let pendingTasksSpan = document.getElementById("pendingTasks");
let clearAllBtn = document.getElementById("clearAllBtn");

// load tasks from localStorage
if (localStorage.getItem("tasks")) {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    renderTasks();
}

// save tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// update counters
function updateCounters() {
    totalTasksSpan.textContent = "Total: " + tasks.length;
    let completed = tasks.filter(t => t.completed).length;
    completedTasksSpan.textContent = "Terminées: " + completed;
    pendingTasksSpan.textContent = "En cours: " + (tasks.length - completed);
}

//  add a new task
function addTask() {
    let text = input.value.trim();
    if (text === "") return; // ne rien faire si l'entrée est vide

    tasks.push({ text: text, completed: false });
    input.value = "";

    saveTasks();
    renderTasks();
}

//  render all tasks
function renderTasks(filter = "") {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        if (!task.text.toLowerCase().includes(filter.toLowerCase())) return;

        let li = document.createElement("li");

        // create task text element
        let taskText = document.createElement("span");
        taskText.textContent = task.text;
        if (task.completed) {
            taskText.style.textDecoration = "line-through"; 
        }

        // btns container
        let btnGroup = document.createElement("div");
        btnGroup.className = "btn-group";

        // complete btn
        let btnComplete = document.createElement("button");
        btnComplete.textContent = "Complete";
        btnComplete.className = "complete-btn";
        btnComplete.addEventListener("click", function() {
            task.completed = !task.completed;
            saveTasks();
            renderTasks(searchInput.value);
        });

        // delete btn
        let btnDelete = document.createElement("button");
        btnDelete.textContent = "Delete";
        btnDelete.className = "delete-btn";
        btnDelete.addEventListener("click", function() {
            tasks.splice(index, 1);
            saveTasks();
            renderTasks(searchInput.value);
        });

        // add btns to container
        btnGroup.appendChild(btnComplete);
        btnGroup.appendChild(btnDelete);

        // + its task text to li
        li.appendChild(taskText);
        li.appendChild(btnGroup);

        // add li à la liste
        taskList.appendChild(li);
    });

    updateCounters();
}

// event listeners
addBtn.addEventListener("click", addTask);
input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// search filter
searchInput.addEventListener("input", function() {
    renderTasks(searchInput.value);
});

// clear all tasks
clearAllBtn.addEventListener("click", function() {
    if (confirm("Voulez-vous vraiment tout supprimer ?")) {
        tasks = [];
        saveTasks();
        renderTasks();
    }
});

// console message
console.log("To-Do List app jawha behi!");
