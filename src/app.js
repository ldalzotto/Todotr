import "./stylesheets/main.css";
// Small helpers you might want to keep
import "./helpers/context_menu.js";
import "./helpers/external_links.js";

// Application code
const Todo = require("./todos/Todo");
const Todos = require("./todos/Todos");
const AddTodo = require("./todos/AddTodo");
const ClearTodo = require("./todos/ClearAllTodo");
const TodoSearch = require("./todos/search/TodoSearch");

const TODO_PAGE = `
  <div id="title">TOTO APP</div>
`;

const todos = new Todos();
todos.addTodo("my TODO");

const addTodoButton = new AddTodo(todos);
const clearTodos = new ClearTodo(todos);

const todoSearch = new TodoSearch();

document.getElementsByTagName("body").item(0).innerHTML = TODO_PAGE;
document.getElementsByTagName("body").item(0).appendChild(addTodoButton.html);
document.getElementsByTagName("body").item(0).appendChild(clearTodos.html);
document.getElementsByTagName("body").item(0).appendChild(todoSearch.html);
document.getElementsByTagName("body").item(0).appendChild(todos.html);
