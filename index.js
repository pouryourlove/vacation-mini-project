const vacationTodosArr = [];

const vacationTodosUl = document.getElementById("vacationTodosUl");
const todoInput = document.getElementById("todoInput");
document.getElementById("form").addEventListener("submit", addTodo);

const input = document.getElementsByClassName("checkbox");

function addTodo(e) {
  e.preventDefault();
  vacationTodosArr.push(todoInput.value);
  createTodo(todoInput.value);
}

function createTodo(todo) {
  const todoLabel = todo.split(" ").join("");

  const li = document.createElement("li");
  li.innerHTML = `
                  <input type="checkbox" class="checkbox" id="${todoLabel}" name="${todoLabel}" />
                  <label for="${todoLabel}">${todo}</label>
                  `;
  vacationTodosUl.appendChild(li);
}

for (let i = 0; i < vacationTodosArr.length; i++) {
  const todo = vacationTodosArr[i];
  createTodo(todo);
}
