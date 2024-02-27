function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskList = document.getElementById("taskList");

  if (taskInput.value.trim() !== "") {
    let listItem = document.createElement("li");

    // Get the current date and format it
    let currentDate = new Date();
    let dateString = currentDate.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    let timeString = currentDate.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });

    // Create a container for the task text and delete button
    let taskContent = document.createElement("div");
    taskContent.classList.add("task-content");
    taskContent.innerHTML = `
          <span>${taskInput.value}</span>
          <span class="delete-btn" onclick="deleteTask(this)">🗑️</span>
      `;

    // Add an event listener to toggle the 'completed' class on the task content
    taskContent.addEventListener("click", function () {
      this.classList.toggle("completed");
    });

    listItem.appendChild(taskContent);

    // Add the date below the task content
    let taskDate = document.createElement("div");
    taskDate.classList.add("task-date");
    taskDate.textContent = `${dateString} ${timeString}`;

    listItem.appendChild(taskDate);

    taskList.appendChild(listItem);
    taskInput.value = ""; // Clear the input
  } else {
    alert("Please enter a task!");
  }
}

function deleteTask(element) {
  element.closest("li").remove();
}
