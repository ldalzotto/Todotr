class AddTodo {
    constructor(TodosListElement) {
        const html = document.createElement("div");

        const textArea = new AddTodoInput();
        const button = document.createElement("button");

        button.innerText = "ADD TODO";
        button.addEventListener('click', () => {
            TodosListElement.addTodo(textArea.getValue());
            textArea.setValue("");
        });

        html.appendChild(button);
        html.appendChild(textArea.html);
        this.html = html;
    }
}

class AddTodoInput {
    constructor() {
        this.html = document.createElement("input");
        this.html.type = "text";
    }

    getValue() {
        return this.html.value;
    }

    setValue(value) {
        this.html.value = value;
    }
}

module.exports = AddTodo;
