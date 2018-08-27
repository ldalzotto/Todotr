class OnResize {
    constructor() {
        this.widthEvents = [];
        window.addEventListener('resize', (e) => {
            const width = window.innerWidth;
            this.widthEvents
                .filter(event => event.conditionFn(width))
                .forEach(event => event.callback())
        });
    }

    subscribeWidth(conditionWith, callback) {
        this.widthEvents.push(new Event(conditionWith, callback));
        if (conditionWith(window.innerWidth)) {
            callback()
        }
    }


}


class Event {
    constructor(conditionFn, callback) {
        this.conditionFn = conditionFn;
        this.callback = callback;
    }
}

module.exports = new OnResize();
