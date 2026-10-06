class MyStack {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    /** 
     * @param {number} x
     * @return {void}
     */
    push(x) {
        // Step 1: Push x to q2
        this.q2.push(x);
        
        // Step 2: Move all elements from q1 to q2
        while (this.q1.length > 0) {
            this.q2.push(this.q1.shift());
        }
        
        // Step 3: Swap references of q1 and q2
        let temp = this.q1;
        this.q1 = this.q2;
        this.q2 = temp;
    }

    /** 
     * @return {number}
     */
    pop() {
        // The front of q1 always represents the top of the stack
        return this.q1.shift();
    }

    /** 
     * @return {number}
     */
    top() {
        return this.q1[0];
    }

    /** 
     * @return {boolean}
     */
    empty() {
        return this.q1.length === 0;
    }
}

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
