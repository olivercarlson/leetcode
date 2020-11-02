// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28
//     ...

// Constraints:

//     1 <= s.length <= 7
//     s consists only of uppercase English letters.
//     s is between "A" and "FXSHRXW".

// A - Z // 1 - 26
// AA - AZ // 27 - 52
// BA - BZ // 53 - 78
// left - right should be increasing numerical value.

/**
 * @param {string} s
 * @return {number}
 */

const titleToNumber = (s) => {
	if (s.length === 1) return s.charCodeAt(0) - 64;
	const arr = s.split('').reverse();

	return arr.reduce((acc, currVal, i) => {
		return (acc += (currVal.charCodeAt() - 64) * 26 ** i);
	}, 0);
};

console.log(titleToNumber('B')); // 2
console.log(titleToNumber('AB')); // 28
console.log(titleToNumber('ZY')); // 701
// console.log(`acc ${acc} currVal ${currVal}  i ${i}`);
