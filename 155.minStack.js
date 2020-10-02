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

class MinStack {
	constructor() {
		this.stack = [];
	}

	push(x) {
		this.stack.push(x);
	}
	pop() {
		this.stack.pop();
	}
	top() {
		return this.stack[this.stack.length - 1];
	}
	getMin() {
		return Math.min(...this.stack);
	}
}
