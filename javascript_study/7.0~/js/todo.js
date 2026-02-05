const toDoForm=document.querySelector("#todo-form")
const toDoInput=toDoForm.querySelector("input")
const toDoList=document.querySelector("#todo-list")

function handleTodoSubmit(event){
    event.preventDefault()
    const newToDo=toDoInput.value
    toDoInput.value="";
}

toDoForm.addEventListener("submit", handleTodoSubmit)