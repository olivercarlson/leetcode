/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */
// Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

const sortedArrayToBST = (nums) => {
	if (!nums.length) return null; // fill in empty tree node with null
	const mid = Math.floor(nums / 2); // find midpoint, rounded down.
	let tree = new TreeNode(nums[mid]); // create new tree with root value = the value of mid missing from the left and right branches.
	tree.left = sortedArrayToBST(nums.slice(0, mid));
	tree.right = sortedArrayToBST(nums.slice(mid + 1));
	return tree;
};
