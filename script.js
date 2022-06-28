function addTask(event) {
  if (event.keyCode === 13) {
    let createInput = document.createElement("input");
    createInput.type = "button";
    createInput.className = "new_task";
    createInput.setAttribute("onclick","completeTask(this);");
    createInput.value = document.getElementById("new_task__input").value;
    document.getElementById("new_tasks1").appendChild(createInput);
  }
}


function completeTask(el) {
  let element = el;
  element.remove();
  let completeInput = document.createElement("input");
  completeInput.type = "button";
  completeInput.value = el.value;
  completeInput.className = "completed_task";
  completeInput.setAttribute("onclick","deleteTask(this);");
  document.getElementById("completed_tasks").appendChild(completeInput); 
}

function deleteTask(el) {
  let element = el;
  element.remove()
}


