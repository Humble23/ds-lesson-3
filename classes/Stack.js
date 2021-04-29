class Stack {
    constructor() {
        this.array = [];
    }

    insert(param) {
        this.array[this.size()] = param;
    }

    remove() {
        let removedValue = null;

        if (this.size() > 0) {
            removedValue = this.array[this.size() - 1];
            this.array.splice(this.size() - 1, 1);
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

    top() {
        return this.array[this.size() - 1] || null;
    }

    get() {
        return this.array;
    }
}

module.exports = Stack;