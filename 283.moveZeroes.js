// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note:

//     You must do this in-place without making a copy of the array.
//     Minimize the total number of operations.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// iterate through.
// find zero, add count, delete zero, at end of array - splice in number of zeroes = count.

const moveZeroes = (nums) => {
	let count = 0;
	for (let i = 0; i <= nums.length; i++) {
		if (nums[i] === 0) {
			count++;
			nums.splice(i, 1);
			--i;
		}
	}
	nums.push(...Array(count).fill(0));
};

console.log(moveZeroes([0, 1, 0, 3, 12])); //[1,3,12,0,0]
console.log(moveZeroes([0, 0, 1])); //[1,3,12,0,0]
