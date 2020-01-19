//V3 - Objects

//It should store todos array on an object
let todoList = {
  todos: [],
  displayTodos: function() {
    //It should have a display todos Method
    console.log("My Todos :", this.todos);
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo(position, newTodoText) {
    this.todos[position].todoText = newTodoText;
    this.displayTodos();
  },
  deleteTodo(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleComplete: function(position) {
    let todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  }
};

// let testArray = ["item 1", "item 2", "item 3"];
// for (let i = 0; i < testArray.length; i++) {
//   console.log(testArray[i]);
// }
