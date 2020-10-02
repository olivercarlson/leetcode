/**
 * initialize your data structure here.
 */

class MinStack {
	constructor() {
		this.stack = [];
		this.min = [];
	}
	getMin() {
		return this.min[this.min.length - 1];
	}

	push(x) {
		!this.min.length ? this.min.push(x) : this.min.push(Math.min(x, this.getMin()));
		this.stack.push(x);
	}
	pop() {
		this.min.pop();
		return this.stack.pop();
	}
	top() {
		return this.stack[this.stack.length - 1];
	}
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
	return this.push(n);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
	return this.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
	// ?
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
	//Math.min()
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
