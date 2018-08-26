const TodoSearchButton = require('./TodoSearchButton');
const TodoSearchInput = require('./TodoSearchInput');

class TodoSearch {

    constructor() {
        const container = document.createElement("div");
        const todoSearchInput = new TodoSearchInput();
        const todoSearchButton = new TodoSearchButton(todoSearchInput, this);
        todoSearchButton.registerLaunchStart((event) => {
            console.log(`wesh ${event}`)
        });
        container.appendChild(todoSearchInput.html);
        container.appendChild(todoSearchButton.html);

        this.html = container;

        gridDisplay(this, todoSearchButton, todoSearchInput);


    }

}

const gridDisplay = function (TodoSearch, TodoSearchButton, TodoSearchInput) {
    TodoSearch.html.style.display = "grid";
    TodoSearch.html.style.gridTemplateColumns = "auto 30%"
};

module.exports = TodoSearch;