const LaunchSearchTodoEventName = "lauchsearch";

class TodoSearchButton {

    constructor(todoSearchInput, todoSearch) {
        const button = document.createElement("button");
        button.innerText = "SEARCH";
        button.addEventListener("click", () => {
            const todoSearchText = todoSearchInput.getText();
            todoSearch.html.dispatchEvent(new CustomEvent(LaunchSearchTodoEventName, {detail: todoSearchText}))
        });
        this.html = button;
    }

    registerLaunchStart(callback) {
        this.html.addEventListener(LaunchSearchTodoEventName, callback);
    }

}

module.exports = TodoSearchButton;