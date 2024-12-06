const taskInput = document.getElementById("taskInput");
const addTaskButton = document.querySelector("#addTaskButton");
const taskList = document.querySelector("#taskList");
const completedTaskList = document.querySelector("#completedTaskList");
const completedTaskTitle = document.querySelector("#CompletedTitle");
const pendingTaskTitle = document.querySelector("#pendingTaskTitle");

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Por favor, agrega una tarea");
        return;
    }

    const taskItem = document.createElement("li");

    const taskTextNode = document.createElement("span");
    taskTextNode.textContent = taskText;
    taskItem.appendChild(taskTextNode);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    const completeButton = document.createElement("button");
    completeButton.textContent = "✔";

    completeButton.addEventListener("click", function () {
        moveTaskToCompleted(taskItem);
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";

    deleteButton.addEventListener("click", function () {
        taskItem.remove();
        checkPendingList();
    });

    buttonContainer.appendChild(completeButton);
    buttonContainer.appendChild(deleteButton);

    taskItem.appendChild(buttonContainer);

    taskList.appendChild(taskItem);

    pendingTaskTitle.classList.remove("hidden");

    taskInput.value = "";
}

function moveTaskToCompleted(taskItem) {
    const completedTaskItem = taskItem.cloneNode(true);

    const buttons = completedTaskItem.querySelectorAll("button");
    buttons.forEach((button) => button.remove());

    completedTaskTitle.classList.remove("hidden");
    completedTaskList.appendChild(completedTaskItem);

    taskItem.remove();
    checkPendingList();
}

function checkPendingList() {
    if (taskList.children.length === 0) {
        pendingTaskTitle.classList.add("hidden");
    }
}

addTaskButton.addEventListener("click", addTask);
