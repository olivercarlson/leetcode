// Given a non-empty array of integers, every element appears twice except for one. Find that single one.
// Note:
// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

/**
 * @param {number[]} nums
 * @return {number}
 */

// Constraints: Must be TC O(n)
// Additional Constraints: NO extra memory

// slow solution due to sort.
// const singleNumber = (nums) => {
// 	nums.sort();
// 	for (let i = 0; i < nums.length; i++) {
// 		if (nums[i] !== nums[++i] && nums[i] !== nums[--i]) {
// 			return nums[i];
// 		}
// 	}
// };

//hon9g's bitwise solution.
const singleNumber = (nums) => nums.reduce((acc, curr) => acc ^ curr);
console.log(singleNumber([4, 1, 2, 1, 2])); // 4
// console.log(singleNumber([2, 2, 1, 2, 2, 1, 3, 4, 5, 4, 5, 1])); // 1
