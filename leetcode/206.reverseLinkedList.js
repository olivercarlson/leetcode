// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

// Follow up:

// A linked list can be reversed either iteratively or recursively. Could you implement both?

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// iterative
// TC: O(n)
// SC: O(1)

const reverseList = (head) => {
	if (head === null) return null;
	let previous = null,
		next = null;
	while (head) {
		next = head.next;
		head.next = previous;
		previous = head;
		head = next;
	}
	return previous;
};

//recursive
const reverseList = (head, previous = null) => {
	if (head === null) return previous;
	let next = head.next;
	head.next = previous;
	return reverseList(next, head);
};
