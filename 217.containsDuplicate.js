// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
// var containsDuplicate = function (nums) {
// 	let seen = [];
// 	for (let i = 0; i < nums.length; i++) {
// 		if (seen.includes(nums[i])) {
// 			return true;
// 		} else {
// 			seen.push(nums[i]);
// 		}
// 	}

// 	return false;
// };

// faster than 99.9% Woo! memory <85.83%
const containsDuplicate = (nums) => {
	nums = nums.sort();
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] === nums[1 + i]) {
			return true;
		}
	}

	return false;
};

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 2, 3, 1])); // true
