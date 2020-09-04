// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a single digit.
// Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example:

// Input l1: (2 -> 4 -> 3)
// Input l2: (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
	this.val = val === undefined ? 0 : val;
	this.next = next === undefined ? null : next;
}

const addTwoNumbers = (l1, l2) => {
	// check if l1.val exists and l2.val exists
	// if l1.val + l2.val > 9
	// if >9, new node = (l1 + l2 - 10) && carry = 1
	// if <9, new node = (l1+l2)
	let carry = 0;
	let l1val = l1.val;
	let l2val = l2.val;
	let l1next = l1.next;
	let l2next = l2.next;
	let sumVal = l1val + l2val + carry;
	while (l1.next !== null && l2.next !== null && carry !== 0) {
		if (sumVal > 9) {
			carry = 1;
			sumVal -= 10;
		}
		if (sumVal < 9) {
			carry = 0;
		}
	}
	//
	// if l1.val && l2.val don't exist = terminate && carry != 0
	// while (l1.next !== null && l2.next !== null) {
	//
	// }
	//

	let output = new ListNode();
};
