console.log("It's working.")


// theme - dark/light
let theme = document.getElementById("theme")
theme.addEventListener("click", ()=>{
    document.body.classList.toggle("dark-mode")
})

// attach drag events

function attachDragEvent(target){
    target.addEventListener("dragstart", ()=>{
        target.classList.add("flying")
    })

    target.addEventListener("dragend",()=>{
        target.classList.remove("flying")
    })
}
// add task
const board = document.querySelector(".board")
const addTask = document.getElementById("add-task")
addTask.addEventListener("click", ()=>{
    const value = prompt("Enter your task")
    if(!value){
        return
    }
    else{
        const pElement = document.createElement("p")
        pElement.innerText = value
        pElement.classList.add("task")
        pElement.setAttribute("draggable", true)
        board.appendChild(pElement)
        attachDragEvent(pElement)
    }
})

// drag drop
const allTasks = document.querySelectorAll(".task")
const allBoards = document.querySelectorAll(".board")

allBoards.forEach(board => {
        board.addEventListener("dragover",()=>{
            const flyingTask = document.querySelector(".flying")
            board.appendChild(flyingTask)
        })
});

allTasks.forEach(task=>{
    attachDragEvent(task)
})