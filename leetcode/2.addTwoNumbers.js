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
	// check if l1.val exists && l2.val exists && carry >0
	// if >9, sum = (l1+l2 - 10) && carry = 1
	// if <9, sum  = (l1+l2);
	let headNode = new ListNode(0);
	let currentNode = headNode;

	let carry = 0;
	let sumVal = 0;

	while (l1 !== null || l2 !== null || sumVal > 0) {
		if (l1 !== null) {
			sumVal += l1.val;
			l1 = l1.next;
		}
		if (l2 !== null) {
			sumVal += l2.val;
			l2 = l2.next;
		}
		if (sumVal > 9) {
			carry = 1;
			sumVal -= 10;
		}
		currentNode.next = new ListNode(sumVal); // make new node with sum;
		currentNode = currentNode.next; //
		sumVal = carry;
		carry = 0;
	}
	return headNode.next; // return pointer to first node with a value (i.e 0)
};
