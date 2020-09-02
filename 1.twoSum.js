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

const twoSum = (nums, target) => {
	// start with firstnum = nums[0]
	// check every num that occurs after firstnum
	// if any sum = target, return [firstnumindex, secondnumindex]
	let firstNumIndex = 0;
	let firstNum = nums[0];
	let secondNumIndex = 1;

	while (firstNumIndex < nums.length - 1) {
		// console.log('firstNumIndex is ' + firstNumIndex);
		// console.log('secondNumIndex is ' + secondNumIndex);

		if (firstNum + nums[secondNumIndex] === target) {
			return [firstNumIndex, secondNumIndex];
		}
		// failed to find a match on the last attempt
		// move firstnum index,

		if (secondNumIndex === nums.length - 1) {
			firstNumIndex++;
			firstNum = nums[firstNumIndex];
			secondNumIndex = 1 + firstNumIndex;
		}
		// failed to find a match, continue on in array;
		else {
			secondNumIndex++;
		}
	}
};

console.log(twoSum([2, 7, 11, 15], 9)); // returns [0,1]
console.log(twoSum([3, 2, 4], 6)); // returns [1,2]
console.log(twoSum([3, 3], 6)); // returns [0,1]
