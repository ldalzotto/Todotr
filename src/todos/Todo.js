const OnResize = require("../resize/OnResize");

const deleteEventname = 'deleted';

class Todo {
    constructor(todoText, id) {
        const todo = this;
        const html = document.createElement("div");

        this.textElement = createTextElement(this);
        this.todoRemoveButton = createEraseButtonElement(this);
        this.todoChangeTextButton = createModifyButton(this.textElement);

        todo.text = todoText;
        todo.html = html;
        todo.id = id;

        html.appendChild(this.todoChangeTextButton);
        html.appendChild(this.textElement);
        html.appendChild(this.todoRemoveButton);
        html.classList.add("todo");
        this.updateText(todoText);

        this.initStyle();
    }

    initStyle() {
        this.html.style.display = "grid";
        this.todoChangeTextButton.style.gridColumn = 1;
        this.textElement.style.gridColumn = 2;
        this.todoRemoveButton.style.gridColumn = 3;
    }

    updateText(text) {
        this.text = text;
        this.textElement.value = text;
    }

    registerRemove(callback) {
        this.html.addEventListener(deleteEventname, callback);
    }
}

const createTextElement = function (todo) {
    const textElement = document.createElement("input");
    textElement.type = "text";
    textElement.readOnly = true;
    textElement.addEventListener("focusout", () => {
        textElement.readOnly = true;
        todo.updateText(textElement.value);
    });
    return textElement;
};

const createEraseButtonElement = function (todo) {
    const removeButton = document.createElement("button");
    removeButton.addEventListener("click", () => {
        todo.html.dispatchEvent(new CustomEvent(deleteEventname, {detail: todo}))
    });
    removeButton.innerText = "X";
    return removeButton;
};

const createModifyButton = function (textElement) {
    todoChangeTextButton = document.createElement("button");
    todoChangeTextButton.addEventListener("click", () => {
        textElement.readOnly = false;
        textElement.focus();
    });
    todoChangeTextButton.innerText = "MODIFY";
    return todoChangeTextButton;
};


module.exports = Todo;
