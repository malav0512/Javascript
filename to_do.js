let array = [];

function addTask() {
    let work = document.getElementById("work");
    let input = work.value.trim();
    if (input) {
        array.push(input);
        input.value = '';
        displayTask();
    }
    else {
        alert("Please enter a task");
    }
}

function displayTask() {
    const task = document.getElementById("Task");
    task.innerHTML = '';
    array.forEach((input, index) => {
        const li = document.createElement("li");
        li.textContent = input;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.style.marginLeft = '10px';
        removeBtn.style.marginBottom = '10px';
        removeBtn.onclick = () => removeTask(index);
        li.appendChild(removeBtn);
        task.appendChild(li);
    })
}

function removeTask(index) {
    array.splice(index, 1);
    displayTask();
}