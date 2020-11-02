/**
 * @param {number[]} nums
 * @return {number}
 */

// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
// Do not allocate extra space for another array, **you must do this by modifying the input array in-place with O(1) extra memory.**

const removeDuplicates = (nums) => {
	if (nums.length <= 1) {
		return nums.length;
	}
	let i = 0;
	while (i < nums.length) {
		if (nums[i] === nums[i + 1]) {
			nums.splice(i + 1, 1);
		} else {
			i++;
		}
	}
};

console.log(removeDuplicates([1, 1, 2])); // returns len = 2 aka [1,2]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // returns 5 aka [0,1,2,3,4]
