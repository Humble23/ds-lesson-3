class Queue {
    constructor() {
        this.array = [];
    }

    insert(param) {
        this.array[this.size()] = param;
    }

    remove() {
        let removedValue = null;

        if (this.size() > 0) {
            removedValue = this.array[0];
            this.array.splice(0, 1);
        }

        return removedValue;
    }

    isFilled() {
        return this.size() > 0 ? true : false;
    }

    isEmpty() {
        return !this.isFilled();
    }

    size() {
        return this.array.length;
    }

    front() {
        return this.array[0] || null;
    }

    get() {
        return this.array;
    }
}

module.exports = Queue;