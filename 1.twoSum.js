/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1]

Input: nums = [3,2,4], target = 6
Output: [1,2]

Input: nums = [3,3], target = 6
Output: [0,1]

NOTES: each input has ONE solution ==> always returns [a,b]

 */

// TC: O(n) worst case.
// SC: O(n) - we could theoreticcaly grow the key to the size of the input.

const twoSum = (nums, target) => {
	// for each number, check if the target - num[i] = 2ndIndex exists in the key
	// if no, add current value to keys {value : index}
	// if yes, return [ ,i]
	const key = {};
	let diff = 0;
	for (let i = 0; i < nums.length; i++) {
		diff = target - nums[i]; // always will be a positive number if we care about the result.
		if (key[diff] >= 0) {
			return [key[diff], i]; // return [index of value 1, index of value 2 aka i]
		} else {
			key[nums[i]] = i;
		}
	}
};

console.log(twoSum([2, 7, 11, 15], 9)); // returns [0,1]
console.log(twoSum([3, 2, 4], 6)); // returns [1,2]
console.log(twoSum([3, 3], 6)); // returns [0,1]

// ***
// OLD: TC: O(n^2) solution
// ***
// const twoSum = (nums, target) => {
// 	// start with firstnum = nums[0]
// 	// check every num that occurs after firstnum
// 	// if any sum = target, return [firstnumindex, secondnumindex]
// 	let firstNumIndex = 0;
// 	let firstNum = nums[0];
// 	let secondNumIndex = 1;

// 	while (firstNumIndex < nums.length - 1) {
// 		// console.log('firstNumIndex is ' + firstNumIndex);
// 		// console.log('secondNumIndex is ' + secondNumIndex);

// 		if (firstNum + nums[secondNumIndex] === target) {
// 			return [firstNumIndex, secondNumIndex];
// 		}
// 		// failed to find a match on the last attempt
// 		// move firstnum index,

// 		if (secondNumIndex === nums.length - 1) {
// 			firstNumIndex++;
// 			firstNum = nums[firstNumIndex];
// 			secondNumIndex = 1 + firstNumIndex;
// 		}
// 		// failed to find a match, continue on in array;
// 		else {
// 			secondNumIndex++;
// 		}
// 	}
// };
