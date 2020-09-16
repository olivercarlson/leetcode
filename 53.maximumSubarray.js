// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

// Input: nums = [-1]
// Output: -1

// Constraints:
// 1 <= nums.length <= 2 * 104
// -231 <= nums[i] <= 231 - 1

const maxSubArray = (nums) => {
	let max1 = nums[0];
	let max2 = nums[0];
	for (let i = 1; i < nums.length; i++) {
		max1 = Math.max(nums[i], max1 + nums[i]);
		console.log(max1);
		if (max1 > max2) {
			max2 = max1;
		}
	}
	return max2;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // returns 6 (4,-1,2,1)
// console.log(maxSubArray([-2, -1])); // returns -1;
// console.log(maxSubArray([-1, -2])); // returns -1;
// console.log(maxSubArray([-2, 1])); // return 1;
// console.log(maxSubArray([1])); // returns 1 (1)
// console.log(maxSubArray([0])); // returns 0 (1)
// console.log(maxSubArray([-1])); // returns -1 (1);
