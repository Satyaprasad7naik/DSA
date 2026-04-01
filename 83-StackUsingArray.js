// 83-StackUsingArray.js

class Stack {
  constructor(capacity = Infinity) {
    this.items = [];
    this.capacity = capacity;
  }

  push(value) {
    if (this.size() >= this.capacity) {
      throw new Error("Stack overflow");
    }
    this.items.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack underflow");
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

// Example usage:
const stack = new Stack(5);
stack.push(10);
stack.push(20);
console.log(stack.peek()); // 20
console.log(stack.pop());  // 20
console.log(stack.size()); // 1
