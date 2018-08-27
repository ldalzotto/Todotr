class TodoSearchButton {

    constructor(todoSearchInput, todoSearch) {
        this.onSearchCalled = undefined;
        const button = document.createElement("button");
        button.innerText = "SEARCH";
        button.addEventListener("click", () => {
            const todoSearchText = todoSearchInput.getText();
            if (this.onSearchCalled) {
                this.onSearchCalled(todoSearchText)
            }
        });
        this.html = button;
    }


}

module.exports = TodoSearchButton;