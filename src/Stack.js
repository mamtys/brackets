class Stack {
    constructor() {
        this._storage = {};
        this._count = 0;
    }
    push(val) {
        this._storage[this._count++] = val;
    }
    pop() {
        delete this._storage[--this._count];
        if (this._count < 0) {
            this._count = 0;
        }
    }
    peek() {
        return this._storage[this._count - 1];
    }
    isEmpty() {
        return this._count === 0;
    }
}

module.exports = Stack;
