const Todo = require('./Todo');

class Todos {
  constructor() {
    const html = document.createElement("div");
    html.id = "todos";
    this.todoList = [];
    this.html = html;
  }

  addTodo(todoText) {
    const todo = new Todo(todoText, this.todoList.length + 1);
    const Todos = this;
    todo.registerRemove((event) => {
      const targetTodo = event.detail;
      Todos.removeTodo(targetTodo.id);
    });
    this.todoList.push(todo);
    this.refreshTodoList();
  }

  removeTodo(id) {
    const todoToRemove = this.todoList.find((todo) => todo.id === id);
    if (todoToRemove) {
      this.todoList.splice(this.todoList.indexOf(todoToRemove), 1);
      this.refreshTodoList();
    }
  }

  clearTodos() {
    this.todoList = [];
    this.refreshTodoList();
  }

  refreshTodoList() {
    while (this.html.firstChild) {
      this.html.removeChild(this.html.firstChild);
    }

    function updateids() {
      for (var i = 0; i < this.todoList.length; i++) {
        this.todoList[i].id = i;
      }
    }

    updateids.call(this);

    this.todoList.forEach((todo) => {
      this.html.appendChild(todo.html);
    })
  }

}

module.exports = Todos;
