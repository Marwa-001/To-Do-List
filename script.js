let inputTask = document.body.getElementsByClassName("inputTask")[0];
let addButton = document.body.getElementsByClassName("addButton")[0];
let bottom = document.body.getElementsByClassName("bottom")[0];
let completedTasks = document.body.getElementsByClassName("completedTasks")[0];
let tasksList = [];

// Displaying new list of saved tasks
function display() {
    // Clear existing tasks
    bottom.innerHTML = '';

    tasksList.forEach((element) => {
        let newTask = document.createElement("div");
        let savedTask = document.createElement("div");
        let taskName = document.createElement("div");
        let deleteTask = document.createElement("img");

        deleteTask.setAttribute("src", "delete.svg");

        savedTask.insertAdjacentHTML("afterbegin", `<input class="checkbox" type="checkbox" name="checkbox">`);
        taskName.innerText = element;
        savedTask.appendChild(taskName);
        savedTask.style = "display:flex; flex-direction:row; gap:15px";
        newTask.style = "display:flex; flex-direction:row; justify-content:space-between";
        newTask.append(savedTask);
        newTask.append(deleteTask);
        bottom.append(newTask);

        // Event listener for task deletion
        deleteTask.addEventListener("click", () => {
            newTask.remove();
            tasksList.splice(tasksList.indexOf(element), 1); // Remove task from tasksList
            console.log(tasksList);
        });

        // Event listener for checkbox
        const checkBox = savedTask.firstElementChild;
        checkBox.addEventListener("click", () => {
            if (checkBox.checked) {
                taskName.style.textDecoration = "line-through";
                completedTasks.appendChild(newTask);
                tasksList.splice(tasksList.indexOf(element), 1); // Remove the task from tasksList
            } else {
                taskName.style.textDecoration = "none";
                tasksList.push(element); // Re-add the task to tasksList
                bottom.appendChild(newTask);
            }
            console.log(tasksList);
        });
    });
}

// Clearing the input field
function removeTask() {
    inputTask.value = "";
}

// Updating TaskList
addButton.addEventListener("click", () => {
    let task = inputTask.value;
    if (task.trim() !== "") {
        tasksList.push(task);
        console.log(tasksList);
        display();
        removeTask();
    }
});
