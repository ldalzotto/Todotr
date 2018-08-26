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
        refreshTodoList(this);
    }

    removeTodo(id) {
        const todoToRemove = this.todoList.find((todo) => todo.id === id);
        if (todoToRemove) {
            this.todoList.splice(this.todoList.indexOf(todoToRemove), 1);
            refreshTodoList(this);
        }
    }

    clearTodos() {
        this.todoList = [];
        refreshTodoList(this);
    }

    getAllTodos() {
        return this.todoList;
    }

}

const refreshTodoList = function (todos) {
    while (todos.html.firstChild) {
        todos.html.removeChild(todos.html.firstChild);
    }

    function updateids() {
        for (var i = 0; i < todos.todoList.length; i++) {
            todos.todoList[i].id = i;
        }
    }

    updateids.call(todos);

    todos.todoList.forEach((todo) => {
        todos.html.appendChild(todo.html);
    })
};

module.exports = Todos;
