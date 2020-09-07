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
// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

// Example:

// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

function ListNode(val = 0, next = null) {
	this.val = val;
	this.next = next;
}

const mergeTwoLists = (l1, l2) => {
	if (l1 === null || l2 === null) return l1 === null ? l2 : l1;

	let l3 = new ListNode();
	let currentNode = l3;

	if (l1.val < l2.val) {
		currentNode.val = l1.val;
		l1 = l1.next;
	} else {
		currentNode.val = l2.val;
		l2 = l2.next;
	}

	while (l1 !== null || l2 !== null) {
		if (l2 === null || (l1 !== null && l1.val < l2.val)) {
			currentNode.next = l1;
			l1 = l1.next;
		} else {
			currentNode.next = l2;
			l2 = l2.next;
		}
		currentNode = currentNode.next;
	}
	return l3;
};
