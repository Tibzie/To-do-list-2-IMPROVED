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

function addingTask() {
    // creating li and add it to the list
    const task = document.createElement("li");
    task.innerHTML = input.value;
    list.appendChild(task);
    // creating close button and add it to the li
    const removeTask = document.createElement("button");
    // // removeTask.textContent = "X";
    removeTask.classList.add("icon", "cross");
    task.appendChild(removeTask);
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
            // adding keyframe class
            todo.classList.add("slide-out");
            // transition when element disappears
            todo.addEventListener("transitionend", function() {
                setTimeout(() => {
                    // remove element
                    todo.remove();
                }, 300);
            });
            // remove element from arraylist
            taskArray.splice(index, 1);
        }
    }
    showTask();
}

function showTask() {
    // the first time it loads it shows a sign of good behaviour displaying an empty list message
    window.onload = () => {
        taskCount.innerHTML = `${taskArray.length} task left to do.`;
    }
    // starts showing the numbers
    if (taskArray.length == 1){
        taskCount.innerHTML = `${taskArray.length} task left to do.`;
        
    } else if (taskArray.length > 1) {
        taskCount.innerHTML = `${taskArray.length} tasks left to do.`;
    } else {
        // it starts showing its not-so-nice side
        const insults = [
            "Is it this all? Come on!",
            "Stop slacking!",
            "You think you've done everything for today, but in reality you are not even close.",
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
