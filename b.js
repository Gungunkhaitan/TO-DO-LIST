var taskCounter = "";
var parentElement = document.getElementById("parentElement");
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var dateInput = document.getElementById("dateInput");
  var description = document.getElementById("description");
  var taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
    alert("Please enter a task.");
    return;
  } else {
    var listItem = document.createElement("li");
    var taskText = document.createElement("block");
    var dateText = document.createElement("block");
    var descriptionText = document.createElement("block");
    var brelement = document.createElement("br");
    var toggleButton = document.createElement("button");
    var deleteButton = document.createElement("button");
    var clearbutton = document.createElement("clearme");
    taskText.textContent = taskInput.value;
    toggleButton.textContent = "show less";
    toggleButton.addEventListener("click", function () {
      descriptionText.classList.toggle("hide");
      dateText.classList.toggle("hide");
      toggleButton.textContent = descriptionText.classList.contains("hide")
        ? "Show More"
        : "Show less";
    });

    dateText.textContent = dateInput.value;
    descriptionText.textContent = description.value;
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      listItem.remove();
    });
    clearbutton.textContent = "Clear All";
    clearbutton.addEventListener("click", function () {
      var taskList = document.getElementById("taskList");
      taskList.clearbutton();
    });
    listItem.appendChild(document.createTextNode("task:-\t\t\t"));
    listItem.appendChild(taskText);
    listItem.appendChild(brelement);
    listItem.appendChild(document.createTextNode("-----------Due date:\t"));
    listItem.appendChild(dateText);
    listItem.appendChild(brelement);
    listItem.appendChild(document.createTextNode("--Description\n"));
    listItem.appendChild(descriptionText);
    listItem.appendChild(toggleButton);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    taskInput.value = "";
    dateInput.value = "";
    description.value = "";
  }
}
