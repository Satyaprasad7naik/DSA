// 85. Implement Queue using Stacks
// Problem: Implement a first in first out (FIFO) queue using only two stacks.
// Support operations: push(x), pop(), peek(), empty().

/**
 * Initialize your data structure here.
 */
var MyQueue = function () {
  this.inStack = [];
  this.outStack = [];
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.inStack.push(x);
};

/**
 * Helper: move elements from inStack to outStack if needed
 */
MyQueue.prototype.shiftStacks = function () {
  if (this.outStack.length === 0) {
    while (this.inStack.length > 0) {
      this.outStack.push(this.inStack.pop());
    }
  }
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  this.shiftStacks();
  return this.outStack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  this.shiftStacks();
  return this.outStack[this.outStack.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.inStack.length === 0 && this.outStack.length === 0;
};

/**
 * Usage example:
 * const q = new MyQueue();
 * q.push(1);
 * q.push(2);
 * console.log(q.peek()); // 1
 * console.log(q.pop());  // 1
 * console.log(q.empty()); // false
 */
