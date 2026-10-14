var MyQueue = function() {
    this.pushStack = [];
    this.popStack = [];
};

/** 
 * Pushes element x to the back of the queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.pushStack.push(x);
};

/**
 * Removes the element from the front of the queue and returns it.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    this.peek(); // Ensure popStack has the current front elements
    return this.popStack.pop();
};

/**
 * Returns the element at the front of the queue.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    // If popStack is empty, transfer all elements from pushStack
    if (this.popStack.length === 0) {
        while (this.pushStack.length > 0) {
            this.popStack.push(this.pushStack.pop());
        }
    }
    return this.popStack[this.popStack.length - 1];
};

/**
 * Returns true if the queue is empty, false otherwise.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.pushStack.length === 0 && this.popStack.length === 0;
};

// --- Test Cases ---
// var obj = new MyQueue();
// obj.push(1);
// obj.push(2);
// console.log(obj.peek());  // Output: 1
// console.log(obj.pop());   // Output: 1
// console.log(obj.empty()); // Output: false
