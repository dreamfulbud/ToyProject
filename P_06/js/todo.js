const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-input");
const toDoList = document.querySelector(".todo-list");
const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(e) {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}
function paintTodo(newTodo) {
  const newList = document.createElement("li");
  newList.id = newTodo.id;

  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button = document.createElement("button");
  button.innerText = "X"
  button.classList.add("del");

  button.addEventListener("click", deleteToDo);
  newList.appendChild(span);
  newList.appendChild(button);
  toDoList.appendChild(newList);
}

function handleTodoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}