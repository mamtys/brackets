class BracketManager {
    constructor(Stack) {
        this._stack = new Stack();
    }
    open(key) {
        this._stack.push(key);
    }
    close(key) {
        if (this._stack.peek(key) !== key) {
            throw new Error('wrong sequence');
        }
        this._stack.pop(key)
    }
    hasUnclosedBracket() {
        return !this._stack.isEmpty();
    }
}

module.exports = BracketManager;
