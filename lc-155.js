var MinStack = function() {
    this.stack = [];    // Main stack to store elements
    this.minStack = []; // Min stack to track the minimums
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    // Push the value onto the main stack
    this.stack.push(val);
    // Push the minimum onto the min stack
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // If the element being popped is the same as the top of the min stack, pop from the min stack as well
    if (this.stack.pop() === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    // Return the top element of the main stack
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    // Return the top element of the min stack, which is the minimum value
    return this.minStack[this.minStack.length - 1];
};

/** 
 * Example Usage:
 * var obj = new MinStack();
 * obj.push(-2);
 * obj.push(0);
 * obj.push(-3);
 * console.log(obj.getMin()); // Output: -3
 * obj.pop();
 * console.log(obj.top());    // Output: 0
 * console.log(obj.getMin()); // Output: -2
 */
