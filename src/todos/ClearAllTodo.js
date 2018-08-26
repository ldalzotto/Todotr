class ClearAllTodo {

  constructor(TodosElement) {
    const button = document.createElement("button");
    button.innerText = "CLEAR ALL";
    button.addEventListener("click", () => {
      TodosElement.clearTodos();
    });
    this.html = button;
  }

}

module.exports = ClearAllTodo;
