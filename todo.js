function addTask(){

    let input = document.getElementById("taskInput");
    let task = input.value;

    if(task === ""){
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerText = task;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    delBtn.onclick = function(){
        li.remove();
    }

    li.appendChild(delBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
