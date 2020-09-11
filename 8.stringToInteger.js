// Implement atoi which converts a string to an integer.

// The function first discards as many whitespace characters as necessary until the first non-whitespace character is found.
// Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.
// The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.

// If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.
// If no valid conversion could be performed, a zero value is returned.

// Note:

//     Only the space character ' ' is considered as whitespace character.
//     Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1].
//     If the numerical value is out of the range of representable values, INT_MAX (231 − 1) or INT_MIN (−231) is returned.

// The first non-whitespace character is '-', which is the minus sign.
// Then take as many numerical digits as possible, which gets 42.

// Explanation: The first non-whitespace character is 'w', which is not a numerical
//              digit or a +/- sign. Therefore no valid conversion could be performed.

// Explanation: The number "-91283472332" is out of the range of a 32-bit signed integer.
//              Thefore INT_MIN (−231) is returned.

/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = (str) => {
	// if (str === '' || str === ' ' || str === '-' || str === '+' || str.trim().length === 0) return 0;
	str = str.trimLeft();
	if (str[0] !== '+' || str[0] !== '-') return 0;
	let isFirst = true;
	let res = '';
	// console.log('parseInt res is ' + parseInt(str));
	return parseInt(str);
	const checkRes = (n) => {
		if (parseInt(n) > 2147483647) {
			return 2147483647;
		}
		if (parseInt(res) < -2147483648) {
			return -2147483648;
		} else return parseInt(res);
	};

	for (let i = 0; i < str.length; i++) {
		console.log(res);
		if (str[i] === ' ') {
			if (isFirst) {
				continue;
			} else {
				if (!isNaN(res)) {
					return checkRes(res);
				}
				return 0;
			}
		}
		if (!isNaN(str[i])) {
			isFirst = false;
			res = res.concat(str[i]);
			continue;
		}
		// handle '--*' and '-123';
		if (str[i] === '-' || str[i] === '+') {
			if (isFirst === true) {
				res = res.concat(str[i]);
				isFirst = false;
				continue;
			} else if (!isNaN(res)) {
				return checkRes(res);
			} else {
				return 0;
			}
		}
		if (isNaN(str[i])) {
			if (res.length > 0 && !isNaN(res)) {
				return checkRes(res);
			}
			return 0;
		}
	}

	return checkRes(res);
};

console.log(myAtoi('42')); // returns 42;
console.log(myAtoi('   -42')); // returns -42;
console.log(myAtoi('4193 with words')); //returns 4193
console.log(myAtoi('words and 987')); // returns 0;
console.log(myAtoi('-91283472332')); // returns -2147483648
console.log(myAtoi('-abc')); // 0
console.log(myAtoi('-5-')); // 0
console.log(myAtoi('      -11919730356x'));
