class AddTodo {
  constructor(TodosListElement) {
    const html = document.createElement("div");

    const textArea = document.createElement("input");
    textArea.type = "text";

    const button = document.createElement("button");
    button.innerText = "ADD TODO";

    button.addEventListener('click', () => {
      TodosListElement.addTodo(textArea.value);
    });

    html.appendChild(button);
    html.appendChild(textArea);
    this.html = html;
  }
}

module.exports = AddTodo;
