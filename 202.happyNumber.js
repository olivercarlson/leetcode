// Write an algorithm to determine if a number n is "happy".

// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.

// Return True if n is a happy number, and False if not.

// Example:

/**
 * @param {number} n
 * @return {boolean}
 */

const isHappy = (n) => {
	return checkIsHappy(n);
};

const checkIsHappy = (n, lookup = {}) => {
	if (n == 1) {
		return true;
	}
	if (n in lookup) {
		return false;
	} else {
		lookup[n] = 1;
	}
	return checkIsHappy(sumOfSquares(n), lookup);
};

const sumOfSquares = (s) => {
	let sum = 0;
	while (s < 0) {
		let d = s % 10;
		sum = sum + d * d;
		s = Math.floor(s / 10);
	}
	return sum;
};

console.log(isHappy(19)); // true;
// Input: 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
