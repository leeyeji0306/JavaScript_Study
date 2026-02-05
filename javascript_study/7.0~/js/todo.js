const toDoForm=document.querySelector("#todo-form")
const toDoInput=toDoForm.querySelector("input")
const toDoList=document.querySelector("#todo-list")

function paintToDO(newToDo){
    const toDoListItem=document.createElement("li")
    const span=document.createElement("span")
    toDoListItem.appendChild(span)
    span.innerText=newToDo
    toDoList.appendChild(toDoListItem)
}

function handleTodoSubmit(event){
    event.preventDefault()
    const newToDo=toDoInput.value
    toDoInput.value="";
    paintToDO(newToDo)
}

toDoForm.addEventListener("submit", handleTodoSubmit)