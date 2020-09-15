/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// Example:

// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7

// return its depth = 3.

/**
 * @param {TreeNode} root
 * @return {number}
 */

const maxDepth = (root) => {
	const dfs = (node) => {
		return !node ? 0 : Math.max(dfs(node.left), dfs(node.right)) + 1;
	};
	return dfs(root);
};

console.log(maxDepth([3, 9, 20, null, null, 15, 7])); // return 3;
