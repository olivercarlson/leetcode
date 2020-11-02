/**
 * @param {number[]} nums
 * @return {number}
 */

// TC: O(n)
// SC: O(n)
// Solution #1: Using an object as a hashmap. Count highest occurrence, iterate through using reduce to find highest occurence and return key

const majorityElement = (nums) => {
	const key = {};
	for (let i = 0; i < nums.length; i++) {
		key[nums[i]] ? (key[nums[i]] += 1) : (key[nums[i]] = 1);
	}
	return Object.keys(key).reduce((acc, curr) => (key[acc] > key[curr] ? acc : curr));
};

// Solution #2: By definition, majority will occur > n/2 times. Therefore of a sorted list, the middle number will be it.
const majorityElement = (nums) => {
	let sort = nums.sort();
	return nums.length % 2 === 0 ? sort[nums.length / 2] : sort[(nums.length - 1) / 2];
};

// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // returns 2
// console.log(majorityElement([3, 2, 3])); // returns 3
