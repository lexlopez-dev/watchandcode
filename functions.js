//V2 - functions

//a function to display todos

let todos = ["item 1", "item 2", "item 3"];

function displayTodos() {
  console.log("My todos: ", todos);
}

//A function to add new todos to array
function addTodos(newTodo) {
  todos.push(newTodo);
  displayTodos();
}

//A function to change todos
function changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodos();
}

//A function to delete todo
function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodos();
}
