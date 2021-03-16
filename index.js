// things to work with
const input = document.getElementById("input");
const addTask = document.getElementById("add");
const reset = document.getElementById("reset");
const list = document.getElementById("list");
const taskCount = document.getElementById("task-count");

// an empty array?! :O
let taskArray = []; 

// more things to work with
addTask.addEventListener("click", addingTask);
list.addEventListener("click", removingTask);
reset.addEventListener("click", resetInput);


showTask();

function addingTask(task, cross) {
    // creating li and add it to the list
    task = document.createElement("li");
    task.innerHTML = input.value;
    list.appendChild(task);
    // creating close button and add it to the li
    cross = document.createElement("button");
    cross.textContent = "X";
    cross.classList.add("deleted");
    task.appendChild(cross);
    // adding task to array when this function is triggered
    taskArray.push(task); 
    // empty input value when task has been added to the list
    input.value = "";
    showTask();
}

function removingTask(e, index) {
    let item = e.target;

    const todo = item.parentElement;
    if(item.tagName === "BUTTON") {
        if(todo.tagName === "LI") {
            todo.remove();
            taskArray.splice(index, 1);
        }
    }
    showTask();
}

function showTask() {
    // the first time it loads it shows a sign of good behaviour displaying an empty list message
    window.onload = () => {
        taskCount.innerHTML = `${taskArray.length} tasks left to do.`;
    }
    // starts showing the numbers
    if(taskArray.length > 0) {
        taskCount.innerHTML = `${taskArray.length} tasks left to do.`;
    } else {
        // it starts showing its not-so-nice side
        const insults = [
            "Is it this all? Come on!",
            "Stop slacking!",
            "You think you've done everything for today, but in reality you are not even close",
            "Nice job! Isn't it time to add something else to your list?!",
            "Oh, so you think you deserve an award now?!",
            "Don't think it's over...",
            "Finally! What took you so long?",
            "Oh, I have an idea! Let's call it a day! WRONG! Don't think that will ever happen!! HAH!",
            "Come on! You can do better than this! No, I was just joking!",
            "My creator works faster than you and it took him a while to create me..."
        ];
        const randomRes = insults[Math.floor(insults.length * Math.random())];
        taskCount.innerHTML = randomRes;
    }
    
}
// making the input value blank
function resetInput() {
    input.value = null;
}
