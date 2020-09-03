/* 
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

    I can be placed before V (5) and X (10) to make 4 and 9. 
    X can be placed before L (50) and C (100) to make 40 and 90. 
    C can be placed before D (500) and M (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
*/

/**
 * @param {string} s
 * @return {number}
 */

const romanToInt = (s) => {
	let res = 0;
	let arr = s.split('');
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 'I') {
			if (arr[1 + i] === 'V') {
				res += 4;
				i++;
				continue;
			}
			if (arr[1 + i] === 'X') {
				res += 9;
				i++;
				continue;
			} else {
				res += 1;
				continue;
			}
		}
		if (arr[i] === 'X') {
			if (arr[1 + i] === 'L') {
				res += 40;
				i++;
				continue;
			}
			if (arr[1 + i] === 'C') {
				res += 90;
				i++;
				continue;
			} else {
				res += 10;
				continue;
			}
		}
		if (arr[i] === 'C') {
			if (arr[1 + i] === 'D') {
				res += 400;
				i++;
				continue;
			}
			if (arr[1 + i] === 'M') {
				res += 900;
				i++;
				continue;
			} else {
				res += 100;
				continue;
			}
		}
		if (arr[i] === 'V') {
			res += 5;
		}
		if (arr[i] === 'L') {
			res += 50;
		}
		if (arr[i] === 'D') {
			res += 500;
		}
		if (arr[i] === 'M') {
			res += 1000;
		}
	}
	return res;
};
console.log(romanToInt('III')); // returns 3
console.log(romanToInt('IV')); // returns 4
console.log(romanToInt('IX')); // returns 9
console.log(romanToInt('LVIII')); // returns 58
console.log(romanToInt('MCMXCIV')); // returns 1994
