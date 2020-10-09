// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.

// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

// Example 3:

// Input: digits = [0]
// Output: [1]

/**
 * @param {number[]} digits
 * @return {number[]}
 */

const plusOne = (digits) => {
	let carry = 0;
	return digits.reduceRight((acc, el, i) => {
		if (carry > 0) {
			el++;
			carry--;
		}
		if (i === digits.length - 1) el++;
		if (el > 9) {
			carry++;
			el = 0;
		}
		acc[i] = el;
		if (i === 0 && carry === 1) {
			acc.unshift(1);
		}
		return acc;
	}, []);
};

const plusOne = (digits) => {
	let i = digits.length;
	while (i--) {
		console.log(`i is ${i} digits is ${digits}`);
		if (digits[i] !== 9) {
			digits[i]++;
			break;
		}
		digits[i] = 0;
	}
	if (digits[0] === 0) digits.unshift(1);

	return digits;
};

console.log(plusOne([1, 2, 3])); // [1,2,4]
console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2]
console.log(plusOne([0])); // [1]
console.log(plusOne([9])); // [1,0]
console.log(plusOne([9, 9])); // [1,0,0]
