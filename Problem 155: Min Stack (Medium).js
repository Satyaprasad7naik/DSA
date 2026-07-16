class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /** * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        
        // Push to minStack if it's empty or the new value is smaller/equal to the current min
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.stack.length === 0) return;
        
        const val = this.stack.pop();
        
        // If the popped value is the current minimum, remove it from minStack too
        if (val === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack.length > 0 ? this.stack[this.stack.length - 1] : null;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack.length > 0 ? this.minStack[this.minStack.length - 1] : null;
    }
}

// Example Usage:
// const minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// console.log(minStack.getMin()); // return -3
// minStack.pop();
// console.log(minStack.top());    // return 0
// console.log(minStack.getMin()); // return -2
