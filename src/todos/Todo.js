const deleteEventname = 'deleted';

class Todo {
  constructor(todoText, id) {
    const todo = this;
    const html = document.createElement("div");

    this.textElement = document.createElement("div");

    this.todoRemoveButton = document.createElement("button");
    this.todoRemoveButton.addEventListener("click", () => {
      html.dispatchEvent(new CustomEvent(deleteEventname, {detail: this}))
    });
    this.todoRemoveButton.innerText = "X";

    todo.text = todoText;
    todo.html = html;
    todo.id = id;

    html.appendChild(this.textElement);
    html.appendChild(this.todoRemoveButton);
    html.classList.add("todo");
    this.updateText(todoText);

    this.initStyle();
  }

  initStyle() {
    this.html.style.display = "grid";
    this.textElement.style.gridColumn = 1;
    this.todoRemoveButton.style.gridColumn = 2;
  }

  updateText(text) {
    this.text = text;
    this.textElement.innerText = text;
  }

  registerRemove(callback) {
    this.html.addEventListener(deleteEventname, callback);
  }
}


module.exports = Todo;
