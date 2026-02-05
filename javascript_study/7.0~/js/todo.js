const toDoForm=document.querySelector("#todo-form")
const toDoInput=toDoForm.querySelector("input")
const toDoList=document.querySelector("#todo-list")

const TODOS_KEY="todos"

const toDos = []

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(event){
    const li=event.target.parentElement
    li.remove()
}

function paintToDO(newToDo){
    const toDoListItem=document.createElement("li")
    const span=document.createElement("span")
    span.innerText=newToDo
    const button = document.createElement("button")
    button.innerText="❌"
    toDoListItem.appendChild(span)
    toDoListItem.appendChild(button)
    toDoList.appendChild(toDoListItem)
    button.addEventListener("click", deleteToDo)
}

function handleTodoSubmit(event){
    event.preventDefault()
    const newToDo=toDoInput.value
    toDoInput.value="";
    toDos.push(newToDo)
    paintToDO(newToDo)
    saveToDos()
}

toDoForm.addEventListener("submit", handleTodoSubmit)

function sayHello(item){
    console.log("this is the turn of", item)
}

const savedToDos=localStorage.getItem(TODOS_KEY)
if(savedToDos !== null){
    const parsedToDos=JSON.parse(savedToDos)
    parsedToDos.forEach(sayHello)
}