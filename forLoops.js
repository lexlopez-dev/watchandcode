//V3 - Objects

//It should store todos array on an object
let todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("The todo list is empty!");
    } else {
      console.log("My Todos :");
      for (let i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed) {
          console.log("(x) " + this.todos[i].todoText);
        } else {
          console.log("( ) " + this.todos[i].todoText);
        }
      }
    }
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
  },
  toggleAll: function() {
    let totalTodos = this.todos.length;
    let completeTodos = 0;

    //Get # of completed todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed) {
        completeTodos++;
      }
    }
    //If everything is true, make everything false
    if (completeTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
    } else {
      //make everything true
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};

//////////////////////////////////////////////////////

//The DOM

//Get access to the display todos button
//Run displayTodos when this button is clicked

let handlers = {
  displayTodos: function() {
    todoList.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
  },
  addTodo: function() {
    let addTodoTextInput = document.getElementById("addTodoTextInput");
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = "";
  },
  changeTodo: function() {
    let changeTodoPositionInput = document.getElementById(
      "changeTodoPositionInput"
    );
    let changeTodoTextInput = document.getElementById("changeTodoTextInput");
    todoList.changeTodo(
      changeTodoPositionInput.valueAsNumber,
      changeTodoTextInput.value
    );
    changeTodoPositionInput.value = "";
    changeTodoTextInput.value = "";
  },
  deleteTodo: function() {
    let deleteTodoPositionInput = document.getElementById(
      "deleteTodoPositionInput"
    );
    todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = "";
  },
  toggleComplete: function() {
    let toggleCompletePositionInput = document.getElementById(
      "toggleCompletePositionInput"
    );
    todoList.toggleComplete(toggleCompletePositionInput.valueAsNumber);
    toggleCompletePositionInput.value = "";
  }
};
