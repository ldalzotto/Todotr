class TodoSearchInput {
    constructor() {
        const input = document.createElement("input");
        input.type = "text";
        this.html = input;
    }

    getText() {
        return this.html.value;
    }
}

module.exports = TodoSearchInput;