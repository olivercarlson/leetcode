// Given a sorted array and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] >= target) {
			return i - 1 < 0 ? 0 : i;
		}
	}
	return nums.length;
};

console.log(searchInsert([1, 3, 5, 6], 5)); // returns 2;
console.log(searchInsert([1, 3, 5, 6], 2)); // returns 1;
console.log(searchInsert([1, 3, 5, 6], 7)); // returns 4;
console.log(searchInsert([1, 3, 5, 6], 0)); // returns 0;
