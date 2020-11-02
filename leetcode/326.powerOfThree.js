// Given an integer, write a function to determine if it is a power of three.
// Could you do it without using any loop / recursion?

// Input: 27
// Output: true

// Input: 0
// Output: false

// Input: 9
// Output: true

// Input: 45
// Output: false

/**
 * @param {number} n
 * @return {boolean}
 */

const isPowerOfThree = (n) => {
	if (n === 3 || n === 1) return true;
	if (n < 3) return false;
	else return isPowerOfThree(n / 3);
};

const isPowerOfthree = (n) => {
	// 3 ** 33 < Number.MAX_SAFE_INTEGER; from hon9g
	return 0 < n && 3 ** 33 % n === 0;
};

// console.log(isPowerOfThree(27)); // true
// console.log(isPowerOfThree(0)); // false
// console.log(isPowerOfThree(9)); // true
// console.log(isPowerOfThree(45)); // false
